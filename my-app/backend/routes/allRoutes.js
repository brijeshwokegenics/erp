
const { Router } =  require('express');


const {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,

  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,

  getAllTeachers,
  getTeacherById,
  createTeacher,
  updateTeacher,
  deleteTeacher,

  getAllClasses,
  getClassById,
  createClass,
  updateClass,
  deleteClass,

  getAllLMS,
  getLMSById,
  createLMS,
  updateLMS,
  deleteLMS,

  getAllHomework,
  getHomeworkById,
  createHomework,
  updateHomework,
  deleteHomework,

  getAllFees,
  getFeeById,
  createFee,
  updateFee,
  deleteFee,

  getAllDisciplinary,
  getDisciplinaryById,
  createDisciplinary,
  updateDisciplinary,
  deleteDisciplinary,

  getAllHealthRecords,
  getHealthRecordById,
  createHealthRecord,
  updateHealthRecord,
  deleteHealthRecord,

  getAllHostels,
  getHostelById,
  createHostel,
  updateHostel,
  deleteHostel,

  getAllParentPortals,
  getParentPortalById,
  createParentPortal,
  updateParentPortal,
  deleteParentPortal,

  getAllAdmissions,
  getAdmissionById,
  createAdmission,
  updateAdmission,
  deleteAdmission,

  getAllLibraryItems,
  getLibraryItemById,
  createLibraryItem,
  updateLibraryItem,
  deleteLibraryItem,

  getAllTransports,
  getTransportById,
  createTransport,
  updateTransport,
  deleteTransport,

  getAllSports,
  getSportById,
  createSport,
  updateSport,
  deleteSport,

  getAllClubs,
  getClubById,
  createClub,
  updateClub,
  deleteClub,

  getAllInventory,
  getInventoryById,
  createInventory,
  updateInventory,
  deleteInventory,

  getAllCafeterias,
  getCafeteriaById,
  createCafeteria,
  updateCafeteria,
  deleteCafeteria,

  getAllEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,

  getAllAdministrations,
  getAdministrationById,
  createAdministration,
  updateAdministration,
  deleteAdministration,

  getAllAlumni,
  getAlumniById,
  createAlumni,
  updateAlumni,
  deleteAlumni,
} = require('../controllers/index'); // Adjust the import path as needed

const router = Router();

/****************************************************************
 * STUDENTS
 ****************************************************************/
router.get('/students', getAllStudents);
router.get('/students/:id', getStudentById);
router.post('/students', createStudent);
router.put('/students/:id', updateStudent);
router.delete('/students/:id', deleteStudent);

/****************************************************************
 * COURSES
 ****************************************************************/
router.get('/courses', getAllCourses);
router.get('/courses/:id', getCourseById);
router.post('/courses', createCourse);
router.put('/courses/:id', updateCourse);
router.delete('/courses/:id', deleteCourse);

/****************************************************************
 * TEACHERS
 ****************************************************************/
router.get('/teachers', getAllTeachers);
router.get('/teachers/:id', getTeacherById);
router.post('/teachers', createTeacher);
router.put('/teachers/:id', updateTeacher);
router.delete('/teachers/:id', deleteTeacher);

/****************************************************************
 * CLASSES
 ****************************************************************/
router.get('/classes', getAllClasses);
router.get('/classes/:id', getClassById);
router.post('/classes', createClass);
router.put('/classes/:id', updateClass);
router.delete('/classes/:id', deleteClass);

/****************************************************************
 * LMS
 ****************************************************************/
router.get('/lms', getAllLMS);
router.get('/lms/:id', getLMSById);
router.post('/lms', createLMS);
router.put('/lms/:id', updateLMS);
router.delete('/lms/:id', deleteLMS);

/****************************************************************
 * HOMEWORK
 ****************************************************************/
router.get('/homework', getAllHomework);
router.get('/homework/:id', getHomeworkById);
router.post('/homework', createHomework);
router.put('/homework/:id', updateHomework);
router.delete('/homework/:id', deleteHomework);

/****************************************************************
 * FEE MANAGEMENT
 ****************************************************************/
router.get('/fees', getAllFees);
router.get('/fees/:id', getFeeById);
router.post('/fees', createFee);
router.put('/fees/:id', updateFee);
router.delete('/fees/:id', deleteFee);

/****************************************************************
 * DISCIPLINARY
 ****************************************************************/
router.get('/disciplinary', getAllDisciplinary);
router.get('/disciplinary/:id', getDisciplinaryById);
router.post('/disciplinary', createDisciplinary);
router.put('/disciplinary/:id', updateDisciplinary);
router.delete('/disciplinary/:id', deleteDisciplinary);

/****************************************************************
 * HEALTH RECORD
 ****************************************************************/
router.get('/healthrecords', getAllHealthRecords);
router.get('/healthrecords/:id', getHealthRecordById);
router.post('/healthrecords', createHealthRecord);
router.put('/healthrecords/:id', updateHealthRecord);
router.delete('/healthrecords/:id', deleteHealthRecord);

/****************************************************************
 * HOSTEL
 ****************************************************************/
router.get('/hostel', getAllHostels);
router.get('/hostel/:id', getHostelById);
router.post('/hostel', createHostel);
router.put('/hostel/:id', updateHostel);
router.delete('/hostel/:id', deleteHostel);

/****************************************************************
 * PARENT PORTAL
 ****************************************************************/
router.get('/parentportal', getAllParentPortals);
router.get('/parentportal/:id', getParentPortalById);
router.post('/parentportal', createParentPortal);
router.put('/parentportal/:id', updateParentPortal);
router.delete('/parentportal/:id', deleteParentPortal);

/****************************************************************
 * ADMISSIONS
 ****************************************************************/
router.get('/admissions', getAllAdmissions);
router.get('/admissions/:id', getAdmissionById);
router.post('/admissions', createAdmission);
router.put('/admissions/:id', updateAdmission);
router.delete('/admissions/:id', deleteAdmission);

/****************************************************************
 * LIBRARY
 ****************************************************************/
router.get('/library', getAllLibraryItems);
router.get('/library/:id', getLibraryItemById);
router.post('/library', createLibraryItem);
router.put('/library/:id', updateLibraryItem);
router.delete('/library/:id', deleteLibraryItem);

/****************************************************************
 * TRANSPORT
 ****************************************************************/
router.get('/transport', getAllTransports);
router.get('/transport/:id', getTransportById);
router.post('/transport', createTransport);
router.put('/transport/:id', updateTransport);
router.delete('/transport/:id', deleteTransport);

/****************************************************************
 * SPORTS
 ****************************************************************/
router.get('/sports', getAllSports);
router.get('/sports/:id', getSportById);
router.post('/sports', createSport);
router.put('/sports/:id', updateSport);
router.delete('/sports/:id', deleteSport);

/****************************************************************
 * CLUB
 ****************************************************************/
router.get('/clubs', getAllClubs);
router.get('/clubs/:id', getClubById);
router.post('/clubs', createClub);
router.put('/clubs/:id', updateClub);
router.delete('/clubs/:id', deleteClub);

/****************************************************************
 * INVENTORY
 ****************************************************************/
router.get('/inventory', getAllInventory);
router.get('/inventory/:id', getInventoryById);
router.post('/inventory', createInventory);
router.put('/inventory/:id', updateInventory);
router.delete('/inventory/:id', deleteInventory);

/****************************************************************
 * CAFETERIA
 ****************************************************************/
router.get('/cafeteria', getAllCafeterias);
router.get('/cafeteria/:id', getCafeteriaById);
router.post('/cafeteria', createCafeteria);
router.put('/cafeteria/:id', updateCafeteria);
router.delete('/cafeteria/:id', deleteCafeteria);

/****************************************************************
 * EVENTS
 ****************************************************************/
router.get('/events', getAllEvents);
router.get('/events/:id', getEventById);
router.post('/events', createEvent);
router.put('/events/:id', updateEvent);
router.delete('/events/:id', deleteEvent);

/****************************************************************
 * ADMINISTRATION
 ****************************************************************/
router.get('/administration', getAllAdministrations);
router.get('/administration/:id', getAdministrationById);
router.post('/administration', createAdministration);
router.put('/administration/:id', updateAdministration);
router.delete('/administration/:id', deleteAdministration);

/****************************************************************
 * ALUMNI
 ****************************************************************/
router.get('/alumni', getAllAlumni);
router.get('/alumni/:id', getAlumniById);
router.post('/alumni', createAlumni);
router.put('/alumni/:id', updateAlumni);
router.delete('/alumni/:id', deleteAlumni);

/****************************************************************
 * EXPORT THE ROUTER
 ****************************************************************/
module.exports = router;
