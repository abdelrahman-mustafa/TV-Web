const { GraphQLServer } = require ('graphql-yoga')
const { Prisma } = require('prisma-binding')
const resolvers = require('./initialize/initResolvers')
const { isAuthenticated } = require('./middleware/isAuthenticated')
// const helmet = require('helmet')
const config = require('./config/config')
// const compression = require('compression')
const typeDefs = require('./initialize/initSchema')
// const path = require('path')
// const express = require('express');
// for further work we add that permission in separate file related to each type 
const permissions = {
  Query: isAuthenticated,
  Mutation:isAuthenticated
}


const server = new GraphQLServer({
    typeDefs,
    resolvers,
    context: req =>({
        req, 
        prisma: new Prisma({
            typeDefs: 'src/generated/prisma.graphql',
            endpoint: 'http://localhost:4400', // endpoint: process.env.PRISMA_ENDPOINT, // the endpoint of the Prisma DB service (value is set in .env)
            // secret: process.env.PRISMA_SECRET, // taken from database/prisma.yml (value is set in .env)

        }),
    }),
    // middlewares: permissions

})
// server.express.use(express.static(path.resolve(__dirname, 'static')))

// server.express.use('/', (req, res) => res.sendFile(path.resolve(__dirname, './static/Greek.html')))



// server.express.use(helmet())
// server.express.use(compression())

// // server.express.use(config.limiter)


// server.start(config.options, ({ port }) => {
//     console.log(`Server running at http://localhost:${port}`)
//   })


module.exports = server