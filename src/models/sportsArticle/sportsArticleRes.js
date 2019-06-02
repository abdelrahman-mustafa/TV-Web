const sportsArticle = {
    Query: {
        sportsArticles: async (_, args, context, info)=>{
            let sportsArticles = await context.prisma.query.sportsArticles({...args},info)
            sportsArticles.sort(function(a,b){
                return new Date(b.publishTime) - new Date(a.publishTime);
            });
            return sportsArticles
        },
        sportsArticle: async (_, args, context, info)=>{
            return await context.prisma.query.sportsArticle({...args},info)
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