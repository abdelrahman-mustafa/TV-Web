const glob = require('glob');
const path = require( 'path' );
const defs = glob.sync('./src/models/**/*Perms.js');
const   Query = []
const   Mutation= []


defs.forEach(element => {

    Query.push(require(path.resolve(element)).Query)
    Mutation.push(require(path.resolve(element)).Mutation)

})

const  totalQuery = {}
const  totalMutation = {}

Mutation.forEach(element => {
    Object.keys(element).forEach(key => {
    totalMutation[key] = element[key]
    })
})

Query.forEach(element => {
    Object.keys(element).forEach(key => {
        totalQuery[key] = element[key]
    })
})

module.exports = {
    Mutation: totalMutation,
    Query: totalQuery
}