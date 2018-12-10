const link = {
    Query: {
        links: (_, args, context, info)=>{
            return context.prisma.query.links({...args},info)
        },
        link: (_, args, context, info)=>{
            return context.prisma.query.link({...args},info)
        },
    },
    Mutation: {
        createLink : async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.createLink({...args},info)

          return y;
        },
        updateLink : async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.updateLink({...args},info)
            return y;
        },
        deleteLink: async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.deleteLink({...args},info)
            return y;
        }
    },
}

module.exports= link;