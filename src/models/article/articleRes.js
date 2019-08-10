const article = {
    Query: {
        articles: async (_, args, context, info)=>{
            let articles = await context.prisma.query.articles({...args},info)
            articles.forEach((article, index) => {
                let time = article.publishTime.substring(
                    article.publishTime.lastIndexOf("T") + 1, 
                    article.publishTime.lastIndexOf("Z")
                );
                let date = article.publishDate.split('T')[0];
                articles[index].date = date + 'T'+time +'Z'
            });
            articles.sort(function(a,b){
                return new Date(b.date) - new Date(a.date);
            });
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