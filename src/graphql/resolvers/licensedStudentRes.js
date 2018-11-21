const licensedStudent = {
    Query: {
       licensedStudents: async (_, args, context, info)=>{
           const licensedStudentss = await context.prisma.query.licensedStudents({...args}, info)
           return licensedStudentss
       },
       licensedStudent : async (_, args, context, info)=>{
           const oneLicensedStudents = await context.prisma.query.licensedStudent({...args}, info)
           if (! oneLicensedStudents) return "Not Found"
           return oneLicensedStudents
       },
    },
    Mutation: {
        createLicensedStudent : async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.createLicensedStudent({
               ...args
            },info)

          return y;
        },
        updateLicensedStudent : async (_,args, context, info)=>{
            const updatedlicensedStudent = await  context.prisma.mutation.updateLicensedStudent({
              ...args
            }, info)

            return updatedlicensedStudent;
        },
        deleteLicensedStudent: async (_,args, context, info)=>{
            const done = await  context.prisma.mutation.deleteLicensedStudent({
                ...args
              }, info)

            return done;
        },
    },
}

module.exports= licensedStudent;