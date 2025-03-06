
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
/**
 * 1) isAuthenticated

 */
exports.isAuthenticated = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ error: 'Missing authorization header' });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
      return res.status(401).json({ error: 'Token not provided' });
    }

    const secret = process.env.JWT_SECRET || 'SOME_SUPER_SECRET';
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
};

/**
 * 2) authorizeRoles(...allowedRoles)
 *
 * Restricts access to routes if the user's role is not in allowedRoles.
 */
exports.authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    const userRole = req.user?.role;
    if (!userRole) {
      return res.status(403).json({ error: 'No user role found' });
    }
    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({ error: `Access denied for role: ${userRole}` });
    }
    next();
  };
};

/**
 * 3) checkResourceOwnerOrAdmin
 *
 * Example resource-ownership check. Adjust logic to your needs.
 *  - Admin can access any resource
 *  - Otherwise, must confirm the user “owns” the resource
 *    (e.g. a parent can only see their child, a teacher can only see their class, etc.)
 */
exports.checkResourceOwnerOrAdmin = async (req, res, next) => {
  // Adjust the logic to your business rules
  // For demonstration, we'll check if user is admin or if
  // user.id === the param user is trying to access
  if (req.user?.role === 'admin') {
    return next();
  }

  // Example: If the route param is studentId and user.id must match it:
  const { studentId } = req.params;
  if (studentId && req.user?.id && studentId === req.user.id) {
    return next();
  }
  // Otherwise, deny
  return res.status(403).json({ error: 'Forbidden: not resource owner' });
};

/**
 * 4) auditLog
 *
 * Logs basic info about each request for auditing.
 * In production, you might store this in a DB or logging service.
 */
exports.auditLog = (req, res, next) => {
  const userId = req.user?.id || 'Anonymous';
  const userRole = req.user?.role || 'NoRole';
  console.log(`[AUDIT] User: ${userId}, Role: ${userRole}, Method: ${req.method}, URL: ${req.originalUrl}`);
  next();
};

/**
 * 5) File Upload (Multer)
 *
 * Basic config that stores files in ./uploads directory.
 * For real usage, ensure the directory exists and set proper OS permissions.
 */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads'); // path relative to project root
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const baseName = path.basename(file.originalname, ext);
    cb(null, `${baseName}-${Date.now()}${ext}`);
  },
});
const fileFilter = (req, file, cb) => {
  // Example: accept only images
  if (file.mimetype === 'image/png' ||
      file.mimetype === 'image/jpeg' ||
      file.mimetype === 'image/gif') {
    cb(null, true);
  } else {
    cb(new Error('Only images are allowed'), false);
  }
};
exports.upload = multer({ storage, fileFilter });

/**
 * 6) Central Error Handling Middleware
 *
 * Placed last, catches all errors that are passed via next(err).
 * - Logs the error
 * - Sends a structured JSON response
 */
exports.errorHandler = (err, req, res, next) => {
    console.error('[ERROR HANDLER]', err);
  
    let statusCode = err.statusCode || 500;
    let message = err.message || 'Internal Server Error';
  
    /**************************************************************
     * 1) Mongoose ValidationError
     *    e.g., thrown when required fields are missing, wrong data type, etc.
     **************************************************************/
    if (err.name === 'ValidationError') {
      statusCode = 400;
      // Build a more descriptive message from the validation errors
      const errors = Object.values(err.errors).map((e) => e.message);
      message = `Validation Error: ${errors.join('; ')}`;
    }
  
    /**************************************************************
     * 2) Mongoose CastError
     *    e.g., thrown when you pass an invalid ObjectId to a query
     **************************************************************/
    else if (err.name === 'CastError') {
      statusCode = 400;
      message = `Invalid ${err.path}: ${err.value}`;
    }
  
    /**************************************************************
     * 3) Mongoose Duplicate Key Error (E11000)
     *    e.g., thrown when inserting a duplicate value for a field
     *          that has a unique index
     **************************************************************/
    else if (err.code === 11000) {
      statusCode = 400;
      // Extract the field name from the error message
      const field = Object.keys(err.keyValue).join(', ');
      message = `Duplicate field value: "${field}" already in use.`;
    }
  
    /**************************************************************
     * 4) Token / JWT Errors (jsonwebtoken)
     *    e.g., thrown if token is invalid or expired
     **************************************************************/
    else if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') {
      statusCode = 401;
      message = 'Invalid or expired token';
    }
  
    /**************************************************************
     * 5) SyntaxError
     *    e.g., thrown if JSON body parsing fails
     **************************************************************/
    else if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
      statusCode = 400;
      message = 'Malformed JSON body';
    }
  
    /**************************************************************
     * 6) Custom "AppError" or other known error classes
     *    e.g., if you've defined a custom class extends Error
     *    that sets err.statusCode
     **************************************************************/
    else if (err.isAppError) {
      // if your custom error sets: err.statusCode, err.message
      statusCode = err.statusCode || 500;
      message = err.message || 'Internal Server Error';
    }
  
    /**************************************************************
     * 7) Fallback for all other errors
     **************************************************************/
  
    // Return the final response
    return res.status(statusCode).json({
      error: {
        message,
        // Optionally include stack trace in development:
        // stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
      },
    });
  };
