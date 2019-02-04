const { isAuthenticated } = require('./../../middleware/isAuthenticated')

module.exports = {
    Query :{admins: isAuthenticated,admin:isAuthenticated},
    Mutation: {updateAdmin: isAuthenticated}
}

