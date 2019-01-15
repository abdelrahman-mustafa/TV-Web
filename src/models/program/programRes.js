const program = {
    Query: {
        programs: async (_, args, context, info)=>{
            return await context.prisma.query.programs({...args},info)
        },
        program: async (_, args, context, info)=>{
            return await context.prisma.query.program({...args},info)
        },
    },
    Mutation: {
        createProgram: async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.createProgram({...args},info)

          return y;
        },
        updateProgram: async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.updateProgram({...args},info)
            return y;
        },
        deleteProgram: async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.deleteProgram({...args},info)
            return y;
        }
    },
}

module.exports= program;