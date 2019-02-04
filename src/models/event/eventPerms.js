const { isAuthenticated } = require('../../middleware/isAuthenticated')

module.exports = {
    Mutation: {
        updateEvent: isAuthenticated,
        createEvent: isAuthenticated,
        deleteEvent: isAuthenticated
    }
}

