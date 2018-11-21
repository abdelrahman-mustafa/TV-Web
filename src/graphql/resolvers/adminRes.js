const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { APP_SECRET, isAuthenticated } = require('../../utils/isAuthenticated')

const admin =  {
    Query: {
        nahjAdmins: async (_, args, context, info)=>{

            const x = await context.prisma.query.nahjAdmins({...args},info)
            return x 
          },
        nahjAdmin : async (_, args, context, info)=>{
          try { 
              const nahjAdmin = await context.prisma.query.nahjAdmin({...args}, info)
              return nahjAdmin;
            } catch (error) {
                return  error;
            }
        },
    },
    Mutation: {
        signup: async(_, args, context, info) => {
            const password = await bcrypt.hash(args.password, 10)
            const user = await context.prisma.mutation.createUser({
              data: { ...args, password },
            }, )
            const token = jwt.sign({ userId: user.id }, APP_SECRET)
          
            return {
              token,
              user,
            }
        },
        login: async (_, args, context, info) =>{
          if (args.username == 'admin' && args.password == "admin"){
            const password = await bcrypt.hash(args.password, 10)
            const admin = await  context.prisma.mutation.createNahjAdmin({
              data: {
                ...args, password
              }
              });
              const token = await jwt.sign({ userId: admin.id}, APP_SECRET)
              const AuthPayload = {
                token,
                userId: admin.id
              }
              return AuthPayload
          }
            
            const user = await context.prisma.query.nahjAdmins({ where: { username: args.username } }, ` { id password } `)
            const userId = user[0].id
           if (!user) {
             throw new Error('No such user found')
           }
         
           const valid = await bcrypt.compare(args.password, user[0].password)
           if (!valid) {
             throw new Error('Invalid password')
           }
         
           const token = await jwt.sign({ userId: userId}, APP_SECRET)
           console.log(token)

           const AuthPayload = {
             token, userId
           }
           return AuthPayload
        },
        createNahjAdmin : async (_,args, context, info)=>{
         // await checkAuth(context)
          const password = await bcrypt.hash(args.data.password, 10)
          args.data.password = password
          try{
          const x = await  context.prisma.mutation.createNahjAdmin({
            ...args,password
            })

          return x;
          }catch (err){
            throw new Error(err)
          }
      },
        updateNahjAdmin : async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.updateNahjAdmin({
              ...args,
                },info)

            return y;
        },
        deleteUser: async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.deleteUser({
              where:{id: args.id}
              }, info)

            return y;
        },
        deleteNahjAdmin: async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.deleteNahjAdmin({
            ...args
              }, info)

            return y;
        },
     

    },
}
   
module.exports = admin;