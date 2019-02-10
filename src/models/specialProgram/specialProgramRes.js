const SpecialProgram = {
    Query: {
        specialPrograms: async (_, args, context, info)=>{
            return await context.prisma.query.specialPrograms({...args},info)
        },
        specialProgram: async (_, args, context, info)=>{
            return await context.prisma.query.specialProgram({...args},info)
        },
    },
    Mutation: {
        createSpecialProgram: async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.createSpecialProgram({...args},info)

          return y;
        },
        updateSpecialProgram: async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.updateSpecialProgram({...args},info)
            return y;
        },
        deleteSpecialProgram: async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.deleteSpecialProgram({...args},info)
            return y;
        }
    },
}

module.exports= SpecialProgram;