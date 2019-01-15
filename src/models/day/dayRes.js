const day = {
    Query: {
        days: async (_, args, context, info)=>{
            return await context.prisma.query.days({...args},info)
        },
        day: async (_, args, context, info)=>{
            return await context.prisma.query.day({...args},info)
        },
    }
}

module.exports= day;