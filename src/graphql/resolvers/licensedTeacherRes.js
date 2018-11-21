const licensedTeacher = {
    Query: {
       licensedTeachers: async (_, args, context, info)=>{
           const licensedTeacherss = await context.prisma.query.licensedTeachers({...args}, info)
           return licensedTeacherss
       },
       licensedTeacher : async (_, args, context, info)=>{
           const oneLicensedTeachers = await context.prisma.query.licensedTeacher({...args}, info)
           if (! oneLicensedTeachers) return "Not Found"
           return oneLicensedTeachers
       },
    },
    Mutation: {
        createLicensedTeacher : async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.createLicensedTeacher({
               ...args
            },info)

          return y;
        },
        updateLicensedTeacher : async (_,args, context, info)=>{
            const updatedlicensedTeacher = await  context.prisma.mutation.updateLicensedTeacher({
              ...args
            }, info)

            return updatedlicensedTeacher;
        },
        deleteLicensedTeacher: async (_,args, context, info)=>{
            const done = await  context.prisma.mutation.deleteLicensedTeacher({
                ...args
              }, info)

            return done;
        },
    },
}

module.exports= licensedTeacher;