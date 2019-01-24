const infoData = {
    Query: {
        search: async (_, args, context, info)=>{
            let result = []
            const articles =  await context.prisma.query.articles({
                where:{
                    name_contains: args.keyword,
                    OR:{
                        article_contains:args.keyword
                    }
                }
            },info)
            const sportsArticles =  await context.prisma.query.sportsArticles({
                where:{
                    name_contains: args.keyword,
                    OR:{
                        article_contains:args.keyword
                    }
                }
            },info)
            await result.push(articles)
            await result.push(sportsArticles)
            return result

        },
        
    },
}

module.exports= infoData;