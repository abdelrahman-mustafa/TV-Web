const { isAuthenticated } = require('../../middleware/isAuthenticated')

module.exports = {
    Mutation: {
        updateSpecialBanner: isAuthenticated,
        createSpecialBanner: isAuthenticated,
        deleteSpecialBanner: isAuthenticated
    }
}

