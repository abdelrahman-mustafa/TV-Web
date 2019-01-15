const setting = {
    Query: {
        settings: async (_, args, context, info)=>{
            return await context.prisma.query.settings({...args},info)
        },
        setting: async (_, args, context, info)=>{
            return await context.prisma.query.setting({...args},info)
        },
    },
    Mutation: {
        updateSetting : async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.updateSetting({...args},info)
            return y;
        }
    },
}

module.exports= setting;