const sportsArticle = {
    Query: {
        sportsArticles: async (_, args, context, info)=>{
            let sportsArticles = await context.prisma.query.sportsArticles({...args},info)
            sportsArticles.forEach((article, index) => {
                let time = article.publishTime.substring(
                    article.publishTime.lastIndexOf("T") + 1, 
                    article.publishTime.lastIndexOf("Z")
                );
                let date = article.publishDate.split('T')[0];
                sportsArticles[index].date = date + 'T'+time +'Z'
            });
            sportsArticles.sort(function(a,b){
                return new Date(b.date) - new Date(a.date);
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