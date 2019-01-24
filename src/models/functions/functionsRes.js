const search = {
    Query: {
        search: async (_, args, context, info)=>{
            let result = []
            const articles =  await context.prisma.query.articles({
                where:{
                    name_contains: args.keyword,
                }
            },info)
            const sportsArticles =  await context.prisma.query.sportsArticles({
                where:{
                    name_contains: args.keyword
                }
            },info)
            articles.forEach(element => {
                sportsArticles.push(element)
            });


            return sportsArticles

        },
        
    },
}

module.exports= search;