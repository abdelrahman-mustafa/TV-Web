const school = {
    Query: {
        schools: (_, args, context, info)=>{
            return context.prisma.query.schools({...args},info)
        },
        school: (_, args, context, info)=>{
            return context.prisma.query.schools({...args},info)
        },
    },
    Mutation: {
        createSchool : async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.createSchool({...args},info)
          return y;
        },
        updateSchool : async (_,args, context, info)=>{

            const y = await  context.prisma.mutation.updateSchool({...args},info)

            return y;
        },
        deleteSchool: async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.deleteSchool({...args},info)

            return y;
        },
    },
}

module.exports= school;