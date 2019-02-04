const { isAuthenticated } = require('../../middleware/isAuthenticated')

module.exports = {
    Mutation: {
        updatePresenter: isAuthenticated,
        createPresenter: isAuthenticated,
        deletePresenter: isAuthenticated
    }
}

