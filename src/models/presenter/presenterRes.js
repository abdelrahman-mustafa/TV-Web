const presenter = {
    Query: {
        presenters: async(_, args, context, info)=>{
            return await context.prisma.query.presenters({...args},info)
        },
        presenter: async (_, args, context, info)=>{
            return await context.prisma.query.presenter({...args},info)
        },
    },
    Mutation: {
        createPresenter : async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.createPresenter({...args},info)

          return y;
        },
        updatePresenter : async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.updatePresenter({...args},info)
            return y;
        },
        deletePresenter: async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.deletePresenter({...args},info)
            return y;
        }
    },
}

module.exports= presenter;