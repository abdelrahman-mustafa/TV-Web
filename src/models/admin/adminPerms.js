const { isAuthenticated } = require('./../../middleware/isAuthenticated')

module.exports = {
    Mutation: {
        updateAdmin: isAuthenticated,
        createAdmin: isAuthenticated,
        deleteAdmin: isAuthenticated
    }
}

