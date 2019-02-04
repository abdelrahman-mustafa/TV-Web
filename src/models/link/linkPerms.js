const { isAuthenticated } = require('../../middleware/isAuthenticated')

module.exports = {
    Mutation: {
        updateLink: isAuthenticated,
        createLink: isAuthenticated,
        deleteLink: isAuthenticated
    }
}

