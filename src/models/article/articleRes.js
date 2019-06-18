const article = {
    Query: {
        articles: async (_, args, context, info)=>{
            let articles = await context.prisma.query.articles({...args},info)
            
            return articles
            
        },
        article: async (_, args, context, info)=>{
            return await context.prisma.query.article({...args},info)
        },
    },
    Mutation: {
        createArticle: async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.createArticle({...args},info)

          return y;
        },
        updateArticle: async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.updateArticle({...args},info)
            return y;
        },
        deleteArticle: async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.deleteArticle({...args},info)
            return y;
        }
    },
}

module.exports= article;