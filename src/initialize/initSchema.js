const path = require('path');
const { mergeTypes } = require('merge-graphql-schemas');
const { importSchema } = require('graphql-import');
const glob = require('glob');
const defs = glob.sync('./src/models/**/*.graphql');
typeDefs = [];
defs.forEach(def => {
    typeDefs.push(importSchema(def));
});
console.log(mergeTypes(typeDefs, { all: true }); )
module.exports = mergeTypes(typeDefs, { all: true }); 