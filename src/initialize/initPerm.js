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

if (Mutation)
{Mutation.forEach(element => {
    if (element){
        Object.keys(element).forEach(key => {
        totalMutation[key] = element[key]
    })
}
})}
if (Query)
{Query.forEach(element => {
    if (element){
    Object.keys(element).forEach(key => {
        totalQuery[key] = element[key]
    })
}
})
}
module.exports = {
    Mutation: totalMutation,
    Query: totalQuery
}