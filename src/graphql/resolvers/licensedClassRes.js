const licensedClass = {
    Query: {
       licensedClasses: async (_, args, context, info)=>{
           const licensedClasss = await context.prisma.query.licensedClasses({...args}, info)
           return licensedClasss
       },
       licensedClass : async (_, args, context, info)=>{
           const licensedClass = await context.prisma.query.licensedClass({...args}, info)
           if (! licensedClass) return "Not Found"
           return licensedClass
       },
    },
    Mutation: {
        createLicensedClass : async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.createLicensedClass({
               ...args
            },info)

          return y;
        },
        updateLicensedClass : async (_,args, context, info)=>{
            var ids = args.id
            delete args.id
            const updatedlicensedClass = await  context.prisma.mutation.updateLicensedClass({
              ...args
            }, info)

            return updatedlicensedClass;
        },
        deleteLicensedClass: async (_,args, context, info)=>{
            const done = await  context.prisma.mutation.deleteLicensedClass({
                ...args
              }, info)

            return done;
        },
    },
}

module.exports= licensedClass;