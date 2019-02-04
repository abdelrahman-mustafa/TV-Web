const { isAuthenticated } = require('../../middleware/isAuthenticated')

module.exports = {
    Mutation: {
        updateSetting: isAuthenticated,
        createSetting: isAuthenticated,
        deleteSetting: isAuthenticated
    }
}

