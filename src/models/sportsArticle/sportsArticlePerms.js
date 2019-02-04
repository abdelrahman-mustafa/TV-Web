const { isAuthenticated } = require('../../middleware/isAuthenticated')

module.exports = {
    Mutation: {
        updateSportsArticle: isAuthenticated,
        createSportsArticle: isAuthenticated,
        deleteSportsArticle: isAuthenticated
    }
}

