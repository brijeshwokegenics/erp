
const express = require('express');
const next = require('next');
const mongoose = require('mongoose');
const cors = require('cors');
// Example: import your "mega" router or individual route files
const allRoutes = require('./routes/allRoutes.js'); // Adjust path
const { errorHandler } = require('./middleware/index.js'); // Your custom error handler

// Determine if we are in dev mode
const dev = process.env.NODE_ENV !== 'production';
// Prepare the Next.js app
const app = next({ dev });
// Next.js request handler
const handle = app.getRequestHandler();

// Connect to MongoDB (example URI)
async function connectDB() {
  const dbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/school_erp';
  try {
    await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Connected to MongoDB');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
  }
}

// Prepare Next.js, then configure Express
app.prepare().then(() => {
  const server = express();

  // Connect to DB
  connectDB();

  // Middlewares
  server.use(cors());
  server.use(express.json());

  // Mount your Express routes under, e.g., '/api'
  // (So calls go to http://localhost:3000/api/students, etc.)
  server.use('/api', allRoutes);

  // If none of your routes matched, let Next.js handle it
  // This means any request not starting with '/api' goes to Next
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  // Error handler (must be after your routes)
  server.use(errorHandler);

  // Start the server
  const port = process.env.PORT || 3000;
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`🚀 Server listening on http://localhost:${port} in ${dev ? 'dev' : 'prod'} mode`);
  });
});
