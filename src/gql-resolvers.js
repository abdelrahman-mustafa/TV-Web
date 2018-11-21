const  {  mergeResolvers } = require('merge-graphql-schemas');
const admin = require('./graphql/resolvers/adminRes');
const content = require('./graphql/resolvers/contentRes');
const evaluation = require('./graphql/resolvers/evaluationRes');
const data = require('./graphql/resolvers/publicDataRes');
const school= require('./graphql/resolvers/schoolRes');
const schAdmin = require('./graphql/resolvers/schAdminRes');
const licenseTerm = require('./graphql/resolvers/licenseTermRes');
const licenseClass = require('./graphql/resolvers/licensedClassRes');
const licenseStudent = require('./graphql/resolvers/licensedStudentRes');
const studentTermEvaluation = require('./graphql/resolvers/studentTermEvaluationRes');
const licensedTeacher = require('./graphql/resolvers/licensedTeacherRes');
const specificClassConfig = require('./graphql/resolvers/specificClassConfigRes');
const specClass = require('./graphql/resolvers/classRes');
const studyLevel = require('./graphql/resolvers/studyLevelRes');


const res = [
  admin,
  content,
  evaluation,
  data,
  school,
  schAdmin,
  licenseTerm,
  licenseClass,
  studyLevel,
  specClass,
  studentTermEvaluation,
  licenseStudent,
  licensedTeacher,
  specificClassConfig
];

module.exports =  mergeResolvers(res);