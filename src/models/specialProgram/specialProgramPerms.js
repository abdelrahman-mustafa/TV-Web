const { isAuthenticated } = require('../../middleware/isAuthenticated')

module.exports = {
    Mutation: {
        updateSpecialProgram: isAuthenticated,
        createSpecialProgram: isAuthenticated,
        deleteSpecialProgram: isAuthenticated
    }
}

