const setting = {
    Query: {
        settings: (_, args, context, info)=>{
            return context.prisma.query.settings({...args},info)
        },
        setting: (_, args, context, info)=>{
            return context.prisma.query.setting({...args},info)
        },
    },
    Mutation: {
        createSetting : async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.createSetting({...args},info)

          return y;
        },
        updateSetting : async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.updateSetting({...args},info)
            return y;
        },
        deleteSetting: async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.deleteSetting({...args},info)
            return y;
        }
    },
}

module.exports= setting;