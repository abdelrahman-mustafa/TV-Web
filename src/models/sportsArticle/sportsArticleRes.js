const sportsArticle = {
    Query: {
        sportsArticles: (_, args, context, info)=>{
            return context.prisma.query.sportsArticles({...args},info)
        },
        sportsArticle: (_, args, context, info)=>{
            return context.prisma.query.sportsArticle({...args},info)
        },
    },
    Mutation: {
        createSportsArticle: async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.createSportsArticle({...args},info)

          return y;
        },
        updateSportsArticle: async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.updateSportsArticle({...args},info)
            return y;
        },
        deleteSportsArticle: async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.deleteSportsArticle({...args},info)
            return y;
        }
    },
}

module.exports= sportsArticle;