const article = {
    Query: {
        articles: async (_, args, context, info)=>{
            let newFirst = args.first;
            if (newFirst < 100) args.first = 100;
            else  args.first = newFirst * 2 
            let articles = await context.prisma.query.articles({...args},info)
            console.log('Articles args: ' + args)

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
            return articles.slice(0, newFirst)
            
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