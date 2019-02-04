const { isAuthenticated } = require('../../middleware/isAuthenticated')

module.exports = {
    Mutation: {
        updateArticle: isAuthenticated,
        createArticle: isAuthenticated,
        deleteArticle: isAuthenticated
    }
}

