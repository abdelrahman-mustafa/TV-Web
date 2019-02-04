const jwt = require('jsonwebtoken')
const APP_SECRET = process.env.APP_SECRET || 'Nahj-Portal-023A56'


const isAuthenticated =  async (resolve, parent, args, context, info) =>{

  if (info.fieldName == 'login') return resolve()
  const Authorization = context.req.request.headers.authorization
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    try {
      await jwt.verify(token, APP_SECRET);
      return   resolve();
    } catch(error){
      throw  Error('this user is not found')
    }
  } else {
    throw new Error('not authenticated')
  }
}


function isAuthorized(context){
    const id = context.req.userId;
    const user = context.prisma.users({where: {_id: id}})
    if (user) return id;
    throw new Error('this user is not authorised')
}
    

module.exports = {
  APP_SECRET,
  isAuthenticated,
  isAuthorized
}