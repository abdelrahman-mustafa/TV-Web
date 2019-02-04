const { isAuthenticated } = require('../../middleware/isAuthenticated')

module.exports = {
    Mutation: {
        updateInfoData: isAuthenticated,
        createInfoData: isAuthenticated,
        deleteInfoData: isAuthenticated
    }
}

