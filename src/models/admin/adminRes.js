const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { APP_SECRET, isAuthenticated } = require('../../middleware/isAuthenticated')

const Admin = {
    Query: {
        admins: async (_, args, context, info)=>{
            return await context.prisma.query.admins({...args},info)
        },
        admin: async(_, args, context, info)=>{
            return await context.prisma.query.admin({...args},info)
        },
    },
    Mutation: {
        createAdmin : async (_,args, context, info)=>{
            const password =  bcrypt.hashSync(args.data.password, 10)
            const admin = await  context.prisma.mutation.createAdmin({
            data: {
                ...args.data, password
            }
            });
          return admin;
        },
        updateAdmin : async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.updateAdmin({...args},info)
            return y;
        },
        deleteAdmin: async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.deleteAdmin({...args},info)
            return y;
        },
        login: async (_, args, context, info) =>{
          let userId;
          let user;
            // if (args.username == 'admin' && args.password == "admin"){
            // user = await context.prisma.query.admins({ where: { username: args.username } }, ` { id password } `);
            // const password = await bcrypt.hash(args.password, 10)
            // const admin = await  context.prisma.mutation.createAdmin({
            // data: {
            //     ...args, password
            // }
            // });
            // const token = await jwt.sign({ userId: admin.id}, APP_SECRET)
            // const AuthPayload = {
            //     token,
            //     userId: admin.id
            // }
            // return AuthPayload
            // }
                
            try {
            user = await context.prisma.query.admins({ where: { username: args.username } }, ` { id password } `);
            if (! user[0].id) throw new Error('No such admin found')
            else userId = user[0].id
            } catch(err){
                throw new Error('No such admin found')

            }         
           const valid = await bcrypt.compare(args.password, user[0].password)
           if (!valid) {
            throw new Error( 'Invalid password')
           }
         
           const token = await jwt.sign({ userId: userId}, APP_SECRET)
           console.log(token)

           const AuthPayload = {
             token, userId
           }
           return AuthPayload
        },

    },
}

module.exports= Admin;