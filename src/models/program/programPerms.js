const { isAuthenticated } = require('../../middleware/isAuthenticated')

module.exports = {
    Mutation: {
        updateProgram: isAuthenticated,
        createProgram: isAuthenticated,
        deleteProgram: isAuthenticated
    }
}

