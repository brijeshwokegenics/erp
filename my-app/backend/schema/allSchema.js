/****************************************************************
 * Import Mongoose
 ****************************************************************/
const mongoose = require('mongoose');

/****************************************************************
 * 1) STUDENT
 * - Other schemas reference Student via `studentId`
 ****************************************************************/
const studentSchema = new mongoose.Schema({
  id:          { type: String, required: false, unique: true }, // optional custom ID
  name:        { type: String },
  age:         { type: Number },
  grade:       { type: String },
  address:     { type: String },
  contactInfo: { type: String },
  email:       { type: String },
});
const Student = mongoose.models.Student || mongoose.model('Student', studentSchema);

/****************************************************************
 * 2) COURSE
 * - Classes, LMS, etc. can reference Course
 ****************************************************************/
const courseSchema = new mongoose.Schema({
  id:           { type: String, required: false, unique: true }, // optional custom ID
  name:         { type: String },
  description:  { type: String },
  credits:      { type: Number },
  prerequisites:{ type: String },
});
const Course = mongoose.models.Course || mongoose.model('Course', courseSchema);

/****************************************************************
 * 3) TEACHER
 * - Classes reference Teacher
 ****************************************************************/
const teacherSchema = new mongoose.Schema({
  id:          { type: String, required: false, unique: true },
  name:        { type: String },
  subject:     { type: String },
  contactInfo: { type: String },
  email:       { type: String },
});
const Teacher = mongoose.models.Teacher || mongoose.model('Teacher', teacherSchema);

/****************************************************************
 * 4) CLASSES
 * - References Course & Teacher
 ****************************************************************/
const classesSchema = new mongoose.Schema({
  id:         { type: String, required: false, unique: true },
  schedule:   { type: String },
  room:       { type: String },
  semester:   { type: String },

  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course', // matches const Course = ...
  },
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
  },
});
const Classes = mongoose.models.Classes || mongoose.model('Classes', classesSchema);

/****************************************************************
 * 5) LMS
 * - References Student & Course
 ****************************************************************/
const lmsSchema = new mongoose.Schema({
  id:             { type: String, required: false, unique: true },
  progress:       { type: String },
  completionDate: { type: Date },

  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
  },
});
const LMS = mongoose.models.LMS || mongoose.model('LMS', lmsSchema);

/****************************************************************
 * 6) HOMEWORK
 * - References Student
 ****************************************************************/
const homeworkSchema = new mongoose.Schema({
  id:         { type: String, required: false, unique: true },
  dueDate:    { type: Date },
  status:     { type: String },
  description:{ type: String },

  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
  },
});
const Homework = mongoose.models.Homework || mongoose.model('Homework', homeworkSchema);

/****************************************************************
 * 7) FEE MANAGEMENT
 * - References Student
 ****************************************************************/
const feeManagementSchema = new mongoose.Schema({
  id:          { type: String, required: false, unique: true },
  amount:      { type: Number },
  dueDate:     { type: Date },
  status:      { type: String },
  paymentDate: { type: Date },

  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
  },
});
const FeeManagement =
  mongoose.models.FeeManagement ||
  mongoose.model('FeeManagement', feeManagementSchema);

/****************************************************************
 * 8) DISCIPLINARY
 * - References Student
 ****************************************************************/
const disciplinarySchema = new mongoose.Schema({
  id:            { type: String, required: false, unique: true },
  incident:      { type: String },
  actionTaken:   { type: String },
  dateOfIncident:{ type: Date },

  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
  },
});
const Disciplinary =
  mongoose.models.Disciplinary ||
  mongoose.model('Disciplinary', disciplinarySchema);

/****************************************************************
 * 9) HEALTH RECORDS
 * - References Student
 ****************************************************************/
const healthRecordSchema = new mongoose.Schema({
  id:             { type: String, required: false, unique: true },
  medicalHistory: { type: String },
  immunizations:  { type: String },
  allergies:      { type: String },

  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
  },
});
const HealthRecord =
  mongoose.models.HealthRecord ||
  mongoose.model('HealthRecord', healthRecordSchema);

/****************************************************************
 * 10) HOSTEL
 * - References Student
 ****************************************************************/
const hostelSchema = new mongoose.Schema({
  id:          { type: String, required: false, unique: true },
  roomNumber:  { type: String },
  occupantName:{ type: String },
  checkInDate: { type: Date },

  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
  },
});
const Hostel =
  mongoose.models.Hostel || mongoose.model('Hostel', hostelSchema);

/****************************************************************
 * 11) PARENT PORTAL
 * - References Student
 ****************************************************************/
const parentPortalSchema = new mongoose.Schema({
  id:          { type: String, required: false, unique: true },
  prntId:      { type: String },
  contactInfo: { type: String },
  relationship:{ type: String },

  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
  },
});
const ParentPortal =
  mongoose.models.ParentPortal ||
  mongoose.model('ParentPortal', parentPortalSchema);

/****************************************************************
 * 12) ADMISSIONS
 * - References Student
 ****************************************************************/
const admissionSchema = new mongoose.Schema({
  id:               { type: String, required: false, unique: true },
  applicationStatus:{ type: String },
  submissionDate:   { type: Date },
  decisionDate:     { type: Date },

  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
  },
});
const Admission =
  mongoose.models.Admission || mongoose.model('Admission', admissionSchema);

/****************************************************************
 * 13) LIBRARY
 * - References Student (borrowedBy)
 ****************************************************************/
const librarySchema = new mongoose.Schema({
  id:             { type: String, required: false, unique: true },
  bookTitle:      { type: String },
  author:         { type: String },
  isbn:           { type: String },
  availableCopies:{ type: Number },
  genre:          { type: String },

  borrowedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
  },
});
const Library =
  mongoose.models.Library || mongoose.model('Library', librarySchema);

/****************************************************************
 * 14) TRANSPORT
 * - No references shown in diagram to Student or Teacher
 ****************************************************************/
const transportSchema = new mongoose.Schema({
  id:            { type: String, required: false, unique: true },
  vehicleNumber: { type: String },
  driverName:    { type: String },
  route:         { type: String },
  capacity:      { type: Number },
});
const Transport =
  mongoose.models.Transport || mongoose.model('Transport', transportSchema);

/****************************************************************
 * 15) SPORTS
 * - No references in diagram (but could reference coach as Teacher)
 ****************************************************************/
const sportsSchema = new mongoose.Schema({
  id:              { type: String, required: false, unique: true },
  sportName:       { type: String },
  coachName:       { type: String },
  practiceSchedule:{ type: String },
  teamMembers:     { type: Number },
});
const Sports =
  mongoose.models.Sports || mongoose.model('Sports', sportsSchema);

/****************************************************************
 * 16) CLUB
 * - No references in diagram (but you could link members if needed)
 ****************************************************************/
const clubsSchema = new mongoose.Schema({
  id:              { type: String, required: false, unique: true },
  clubName:        { type: String },
  president:       { type: String },
  meetingSchedule: { type: String },
  advisor:         { type: String },
});
const Club = mongoose.models.Club || mongoose.model('Club', clubsSchema);

/****************************************************************
 * 17) INVENTORY
 * - No references in diagram
 ****************************************************************/
const inventorySchema = new mongoose.Schema({
  id:          { type: String, required: false, unique: true },
  itemName:    { type: String },
  quantity:    { type: Number },
  reorderLevel:{ type: Number },
  supplier:    { type: String },
});
const Inventory =
  mongoose.models.Inventory || mongoose.model('Inventory', inventorySchema);

/****************************************************************
 * 18) CAFETERIA
 * - No references in diagram
 ****************************************************************/
const cafeteriaSchema = new mongoose.Schema({
  id:              { type: String, required: false, unique: true },
  menu:            { type: String },
  dailySpecial:    { type: String },
  openingHours:    { type: String },
  seatingCapacity: { type: Number },
});
const Cafeteria =
  mongoose.models.Cafeteria || mongoose.model('Cafeteria', cafeteriaSchema);

/****************************************************************
 * 19) EVENTS
 * - No references in diagram
 ****************************************************************/
const eventSchema = new mongoose.Schema({
  id:       { type: String, required: false, unique: true },
  name:     { type: String },
  date:     { type: Date },
  location: { type: String },
  organizer:{ type: String },
});
const Event = mongoose.models.Event || mongoose.model('Event', eventSchema);

/****************************************************************
 * 20) ADMINISTRATION
 * - No references in diagram
 ****************************************************************/
const administrationSchema = new mongoose.Schema({
  id:         { type: String, required: false, unique: true },
  name:       { type: String },
  role:       { type: String },
  contactInfo:{ type: String },
  department: { type: String },
});
const Administration =
  mongoose.models.Administration ||
  mongoose.model('Administration', administrationSchema);

/****************************************************************
 * 21) ALUMNI
 * - No references in diagram
 ****************************************************************/
const alumniSchema = new mongoose.Schema({
  id:               { type: String, required: false, unique: true },
  name:             { type: String },
  graduationYear:   { type: Number },
  contactInfo:      { type: String },
  currentOccupation:{ type: String },
});
const Alumni = mongoose.models.Alumni || mongoose.model('Alumni', alumniSchema);

/****************************************************************
 * EXPORT ALL (CommonJS)
 ****************************************************************/
module.exports = {
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
};
