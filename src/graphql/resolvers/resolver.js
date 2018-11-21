const  {  mergeResolvers } = require('merge-graphql-schemas');
 


const admin = require('./adminRes');
const content = require('./contentRes');
const evaluation = require('./evaluationRes');
const data = require('./genericRes');
const school= require('./schoolRes');

const resolvers = [
    admin,
    content,
    evaluation,
    data,
    school,
  ];

 
module.exports =  mergeResolvers(resolvers);