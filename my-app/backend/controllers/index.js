/**********************************************
 *  Import All Models from ../models/index.js
 **********************************************/
const {
  Student,
  Course,
  Teacher,
  Classes,
  LMS,
  Homework,
  FeeManagement,
  Disciplinary,
  HealthRecord,
  Hostel,
  ParentPortal,
  Admission,
  Library,
  Transport,
  Sports,
  Club,
  Inventory,
  Cafeteria,
  Event,
  Administration,
  Alumni,
} = require('../schema/allSchema.js'); 
// Adjust the path if your index file is located elsewhere

/************************************
 * 1) STUDENT
 ************************************/

exports.getAllStudents = async (req, res, next) => {
  try {
    const filter = { ...req.query };
    const data = await Student.find(filter);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

exports.getStudentById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Student.findById(id);
    if (!data) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

exports.createStudent = async (req, res, next) => {
  try {
    const newStudent = await Student.create(req.body);
    res.status(201).json(newStudent);
  } catch (err) {
    next(err);
  }
};

exports.updateStudent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await Student.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
};

exports.deleteStudent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Student.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.status(200).json({ message: 'Student deleted successfully' });
  } catch (err) {
    next(err);
  }
};

/************************************
 * 2) COURSE
 ************************************/
exports.getAllCourses = async (req, res, next) => {
  try {
    const filter = { ...req.query };
    const data = await Course.find(filter);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

exports.getCourseById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Course.findById(id);
    if (!data) {
      return res.status(404).json({ error: 'Course not found' });
    }
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

exports.createCourse = async (req, res, next) => {
  try {
    const newCourse = await Course.create(req.body);
    res.status(201).json(newCourse);
  } catch (err) {
    next(err);
  }
};

exports.updateCourse = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await Course.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ error: 'Course not found' });
    }
    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
};

exports.deleteCourse = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Course.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: 'Course not found' });
    }
    res.status(200).json({ message: 'Course deleted successfully' });
  } catch (err) {
    next(err);
  }
};

/************************************
 * 3) TEACHER
 ************************************/
exports.getAllTeachers = async (req, res, next) => {
  try {
    const filter = { ...req.query };
    const data = await Teacher.find(filter);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

exports.getTeacherById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Teacher.findById(id);
    if (!data) {
      return res.status(404).json({ error: 'Teacher not found' });
    }
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

exports.createTeacher = async (req, res, next) => {
  try {
    const newTeacher = await Teacher.create(req.body);
    res.status(201).json(newTeacher);
  } catch (err) {
    next(err);
  }
};

exports.updateTeacher = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await Teacher.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ error: 'Teacher not found' });
    }
    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
};

exports.deleteTeacher = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Teacher.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: 'Teacher not found' });
    }
    res.status(200).json({ message: 'Teacher deleted successfully' });
  } catch (err) {
    next(err);
  }
};

/************************************
 * 4) CLASSES
 ************************************/
exports.getAllClasses = async (req, res, next) => {
  try {
    const filter = { ...req.query };
    const data = await Classes.find(filter);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

exports.getClassById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Classes.findById(id);
    if (!data) {
      return res.status(404).json({ error: 'Class not found' });
    }
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

exports.createClass = async (req, res, next) => {
  try {
    const newClass = await Classes.create(req.body);
    res.status(201).json(newClass);
  } catch (err) {
    next(err);
  }
};

exports.updateClass = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await Classes.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ error: 'Class not found' });
    }
    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
};

exports.deleteClass = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Classes.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: 'Class not found' });
    }
    res.status(200).json({ message: 'Class deleted successfully' });
  } catch (err) {
    next(err);
  }
};

/************************************
 * 5) LMS
 ************************************/
exports.getAllLMS = async (req, res, next) => {
  try {
    const filter = { ...req.query };
    const data = await LMS.find(filter);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

exports.getLMSById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await LMS.findById(id);
    if (!data) {
      return res.status(404).json({ error: 'LMS record not found' });
    }
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

exports.createLMS = async (req, res, next) => {
  try {
    const newRecord = await LMS.create(req.body);
    res.status(201).json(newRecord);
  } catch (err) {
    next(err);
  }
};

exports.updateLMS = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await LMS.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ error: 'LMS record not found' });
    }
    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
};

exports.deleteLMS = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await LMS.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: 'LMS record not found' });
    }
    res.status(200).json({ message: 'LMS record deleted successfully' });
  } catch (err) {
    next(err);
  }
};

/************************************
 * 6) HOMEWORK
 ************************************/
exports.getAllHomework = async (req, res, next) => {
  try {
    const filter = { ...req.query };
    const data = await Homework.find(filter);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

exports.getHomeworkById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Homework.findById(id);
    if (!data) {
      return res.status(404).json({ error: 'Homework not found' });
    }
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

exports.createHomework = async (req, res, next) => {
  try {
    const newHomework = await Homework.create(req.body);
    res.status(201).json(newHomework);
  } catch (err) {
    next(err);
  }
};

exports.updateHomework = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await Homework.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ error: 'Homework not found' });
    }
    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
};

exports.deleteHomework = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Homework.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: 'Homework not found' });
    }
    res.status(200).json({ message: 'Homework deleted successfully' });
  } catch (err) {
    next(err);
  }
};

/************************************
 * 7) FEE MANAGEMENT
 ************************************/
exports.getAllFees = async (req, res, next) => {
  try {
    const filter = { ...req.query };
    const data = await FeeManagement.find(filter);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

exports.getFeeById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await FeeManagement.findById(id);
    if (!data) {
      return res.status(404).json({ error: 'Fee record not found' });
    }
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

exports.createFee = async (req, res, next) => {
  try {
    const newFee = await FeeManagement.create(req.body);
    res.status(201).json(newFee);
  } catch (err) {
    next(err);
  }
};

exports.updateFee = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await FeeManagement.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ error: 'Fee record not found' });
    }
    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
};

exports.deleteFee = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await FeeManagement.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: 'Fee record not found' });
    }
    res.status(200).json({ message: 'Fee record deleted successfully' });
  } catch (err) {
    next(err);
  }
};

/************************************
 * 8) DISCIPLINARY
 ************************************/
exports.getAllDisciplinary = async (req, res, next) => {
  try {
    const filter = { ...req.query };
    const data = await Disciplinary.find(filter);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

exports.getDisciplinaryById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Disciplinary.findById(id);
    if (!data) {
      return res.status(404).json({ error: 'Disciplinary record not found' });
    }
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

exports.createDisciplinary = async (req, res, next) => {
  try {
    const newRecord = await Disciplinary.create(req.body);
    res.status(201).json(newRecord);
  } catch (err) {
    next(err);
  }
};

exports.updateDisciplinary = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await Disciplinary.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ error: 'Disciplinary record not found' });
    }
    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
};

exports.deleteDisciplinary = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Disciplinary.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: 'Disciplinary record not found' });
    }
    res.status(200).json({ message: 'Disciplinary record deleted successfully' });
  } catch (err) {
    next(err);
  }
};

/************************************
 * 9) HEALTH RECORD
 ************************************/
exports.getAllHealthRecords = async (req, res, next) => {
  try {
    const filter = { ...req.query };
    const data = await HealthRecord.find(filter);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

exports.getHealthRecordById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await HealthRecord.findById(id);
    if (!data) {
      return res.status(404).json({ error: 'Health record not found' });
    }
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

exports.createHealthRecord = async (req, res, next) => {
  try {
    const newRecord = await HealthRecord.create(req.body);
    res.status(201).json(newRecord);
  } catch (err) {
    next(err);
  }
};

exports.updateHealthRecord = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await HealthRecord.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ error: 'Health record not found' });
    }
    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
};

exports.deleteHealthRecord = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await HealthRecord.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: 'Health record not found' });
    }
    res.status(200).json({ message: 'Health record deleted successfully' });
  } catch (err) {
    next(err);
  }
};

/************************************
 * 10) HOSTEL
 ************************************/
exports.getAllHostels = async (req, res, next) => {
  try {
    const filter = { ...req.query };
    const data = await Hostel.find(filter);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

exports.getHostelById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Hostel.findById(id);
    if (!data) {
      return res.status(404).json({ error: 'Hostel not found' });
    }
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

exports.createHostel = async (req, res, next) => {
  try {
    const newHostel = await Hostel.create(req.body);
    res.status(201).json(newHostel);
  } catch (err) {
    next(err);
  }
};

exports.updateHostel = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await Hostel.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ error: 'Hostel not found' });
    }
    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
};

exports.deleteHostel = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Hostel.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: 'Hostel not found' });
    }
    res.status(200).json({ message: 'Hostel deleted successfully' });
  } catch (err) {
    next(err);
  }
};

/************************************
 * 11) PARENT PORTAL
 ************************************/
exports.getAllParentPortals = async (req, res, next) => {
  try {
    const filter = { ...req.query };
    const data = await ParentPortal.find(filter);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

exports.getParentPortalById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await ParentPortal.findById(id);
    if (!data) {
      return res.status(404).json({ error: 'Parent portal not found' });
    }
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

exports.createParentPortal = async (req, res, next) => {
  try {
    const newPortal = await ParentPortal.create(req.body);
    res.status(201).json(newPortal);
  } catch (err) {
    next(err);
  }
};

exports.updateParentPortal = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await ParentPortal.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ error: 'Parent portal not found' });
    }
    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
};

exports.deleteParentPortal = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await ParentPortal.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: 'Parent portal not found' });
    }
    res.status(200).json({ message: 'Parent portal deleted successfully' });
  } catch (err) {
    next(err);
  }
};

/************************************
 * 12) ADMISSION
 ************************************/
exports.getAllAdmissions = async (req, res, next) => {
  try {
    const filter = { ...req.query };
    const data = await Admission.find(filter);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

exports.getAdmissionById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Admission.findById(id);
    if (!data) {
      return res.status(404).json({ error: 'Admission not found' });
    }
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

exports.createAdmission = async (req, res, next) => {
  try {
    const newAdmission = await Admission.create(req.body);
    res.status(201).json(newAdmission);
  } catch (err) {
    next(err);
  }
};

exports.updateAdmission = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await Admission.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ error: 'Admission not found' });
    }
    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
};

exports.deleteAdmission = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Admission.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: 'Admission not found' });
    }
    res.status(200).json({ message: 'Admission deleted successfully' });
  } catch (err) {
    next(err);
  }
};

/************************************
 * 13) LIBRARY
 ************************************/
exports.getAllLibraryItems = async (req, res, next) => {
  try {
    const filter = { ...req.query };
    const data = await Library.find(filter);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

exports.getLibraryItemById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Library.findById(id);
    if (!data) {
      return res.status(404).json({ error: 'Library item not found' });
    }
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

exports.createLibraryItem = async (req, res, next) => {
  try {
    const newItem = await Library.create(req.body);
    res.status(201).json(newItem);
  } catch (err) {
    next(err);
  }
};

exports.updateLibraryItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await Library.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ error: 'Library item not found' });
    }
    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
};

exports.deleteLibraryItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Library.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: 'Library item not found' });
    }
    res.status(200).json({ message: 'Library item deleted successfully' });
  } catch (err) {
    next(err);
  }
};

/************************************
 * 14) TRANSPORT
 ************************************/
exports.getAllTransports = async (req, res, next) => {
  try {
    const filter = { ...req.query };
    const data = await Transport.find(filter);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

exports.getTransportById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Transport.findById(id);
    if (!data) {
      return res.status(404).json({ error: 'Transport record not found' });
    }
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

exports.createTransport = async (req, res, next) => {
  try {
    const newTransport = await Transport.create(req.body);
    res.status(201).json(newTransport);
  } catch (err) {
    next(err);
  }
};

exports.updateTransport = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await Transport.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ error: 'Transport not found' });
    }
    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
};

exports.deleteTransport = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Transport.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: 'Transport not found' });
    }
    res.status(200).json({ message: 'Transport record deleted successfully' });
  } catch (err) {
    next(err);
  }
};

/************************************
 * 15) SPORTS
 ************************************/
exports.getAllSports = async (req, res, next) => {
  try {
    const filter = { ...req.query };
    const data = await Sports.find(filter);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

exports.getSportById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Sports.findById(id);
    if (!data) {
      return res.status(404).json({ error: 'Sport not found' });
    }
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

exports.createSport = async (req, res, next) => {
  try {
    const newSport = await Sports.create(req.body);
    res.status(201).json(newSport);
  } catch (err) {
    next(err);
  }
};

exports.updateSport = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await Sports.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ error: 'Sport not found' });
    }
    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
};

exports.deleteSport = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Sports.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: 'Sport not found' });
    }
    res.status(200).json({ message: 'Sport deleted successfully' });
  } catch (err) {
    next(err);
  }
};

/************************************
 * 16) CLUB
 ************************************/
exports.getAllClubs = async (req, res, next) => {
  try {
    const filter = { ...req.query };
    const data = await Club.find(filter);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

exports.getClubById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Club.findById(id);
    if (!data) {
      return res.status(404).json({ error: 'Club not found' });
    }
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

exports.createClub = async (req, res, next) => {
  try {
    const newClub = await Club.create(req.body);
    res.status(201).json(newClub);
  } catch (err) {
    next(err);
  }
};

exports.updateClub = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await Club.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ error: 'Club not found' });
    }
    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
};

exports.deleteClub = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Club.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: 'Club not found' });
    }
    res.status(200).json({ message: 'Club deleted successfully' });
  } catch (err) {
    next(err);
  }
};

/************************************
 * 17) INVENTORY
 ************************************/
exports.getAllInventory = async (req, res, next) => {
  try {
    const filter = { ...req.query };
    const data = await Inventory.find(filter);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

exports.getInventoryById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Inventory.findById(id);
    if (!data) {
      return res.status(404).json({ error: 'Inventory item not found' });
    }
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

exports.createInventory = async (req, res, next) => {
  try {
    const newItem = await Inventory.create(req.body);
    res.status(201).json(newItem);
  } catch (err) {
    next(err);
  }
};

exports.updateInventory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await Inventory.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ error: 'Inventory item not found' });
    }
    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
};

exports.deleteInventory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Inventory.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: 'Inventory item not found' });
    }
    res.status(200).json({ message: 'Inventory item deleted successfully' });
  } catch (err) {
    next(err);
  }
};

/************************************
 * 18) CAFETERIA
 ************************************/
exports.getAllCafeterias = async (req, res, next) => {
  try {
    const filter = { ...req.query };
    const data = await Cafeteria.find(filter);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

exports.getCafeteriaById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Cafeteria.findById(id);
    if (!data) {
      return res.status(404).json({ error: 'Cafeteria not found' });
    }
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

exports.createCafeteria = async (req, res, next) => {
  try {
    const newCafe = await Cafeteria.create(req.body);
    res.status(201).json(newCafe);
  } catch (err) {
    next(err);
  }
};

exports.updateCafeteria = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await Cafeteria.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ error: 'Cafeteria not found' });
    }
    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
};

exports.deleteCafeteria = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Cafeteria.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: 'Cafeteria not found' });
    }
    res.status(200).json({ message: 'Cafeteria deleted successfully' });
  } catch (err) {
    next(err);
  }
};

/************************************
 * 19) EVENT
 ************************************/
exports.getAllEvents = async (req, res, next) => {
  try {
    const filter = { ...req.query };
    const data = await Event.find(filter);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

exports.getEventById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Event.findById(id);
    if (!data) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

exports.createEvent = async (req, res, next) => {
  try {
    const newEvent = await Event.create(req.body);
    res.status(201).json(newEvent);
  } catch (err) {
    next(err);
  }
};

exports.updateEvent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await Event.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
};

exports.deleteEvent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Event.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (err) {
    next(err);
  }
};

/************************************
 * 20) ADMINISTRATION
 ************************************/
exports.getAllAdministrations = async (req, res, next) => {
  try {
    const filter = { ...req.query };
    const data = await Administration.find(filter);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

exports.getAdministrationById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Administration.findById(id);
    if (!data) {
      return res.status(404).json({ error: 'Administration entry not found' });
    }
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

exports.createAdministration = async (req, res, next) => {
  try {
    const newAdmin = await Administration.create(req.body);
    res.status(201).json(newAdmin);
  } catch (err) {
    next(err);
  }
};

exports.updateAdministration = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await Administration.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ error: 'Administration entry not found' });
    }
    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
};

exports.deleteAdministration = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Administration.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: 'Administration entry not found' });
    }
    res.status(200).json({ message: 'Administration entry deleted successfully' });
  } catch (err) {
    next(err);
  }
};

/************************************
 * 21) ALUMNI
 ************************************/
exports.getAllAlumni = async (req, res, next) => {
  try {
    const filter = { ...req.query };
    const data = await Alumni.find(filter);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

exports.getAlumniById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Alumni.findById(id);
    if (!data) {
      return res.status(404).json({ error: 'Alumni record not found' });
    }
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

exports.createAlumni = async (req, res, next) => {
  try {
    const newAlumni = await Alumni.create(req.body);
    res.status(201).json(newAlumni);
  } catch (err) {
    next(err);
  }
};

exports.updateAlumni = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await Alumni.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ error: 'Alumni record not found' });
    }
    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
};

exports.deleteAlumni = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Alumni.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: 'Alumni record not found' });
    }
    res.status(200).json({ message: 'Alumni record deleted successfully' });
  } catch (err) {
    next(err);
  }
};