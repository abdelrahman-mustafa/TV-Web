const day = {
    Query: {
        days: async (_, args, context, info)=>{
            return await context.prisma.query.days({...args},info)
        },
        day: async (_, args, context, info)=>{
            return await context.prisma.query.day({...args},info)
        },
    },
    Mutation: {
        createDay : async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.createDay({...args},info)

          return y;
        },
        updateDay : async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.updateDay({...args},info)
            return y;
        },
        deleteDay: async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.deleteDay({...args},info)
            return y;
        }
    },
}

module.exports= day;