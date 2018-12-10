const infoData = {
    Query: {
        infoDatas: (_, args, context, info)=>{
            return context.prisma.query.infoDatas({...args},info)
        },
        infoData: (_, args, context, info)=>{
            return context.prisma.query.infoData({...args},info)
        },
    },
    Mutation: {
        createInfoData: async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.createInfoData({...args},info)

          return y;
        },
        updateInfoData: async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.updateInfoData({...args},info)
            return y;
        },
        deleteInfoData: async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.deleteInfoData({...args},info)
            return y;
        }
    },
}

module.exports= infoData;