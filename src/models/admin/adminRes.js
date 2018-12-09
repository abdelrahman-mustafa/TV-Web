const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
        deleteNahjAdmin: async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.deleteNahjAdmin({
            ...args
              }, info)

            return y;
        },
    },
}
   
module.exports = admin;