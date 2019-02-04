const { isAuthenticated } = require('../../middleware/isAuthenticated')

module.exports = {
    Mutation: {
        updateSchedule: isAuthenticated,
        createSchedule: isAuthenticated,
        deleteSchedule: isAuthenticated
    }
}

