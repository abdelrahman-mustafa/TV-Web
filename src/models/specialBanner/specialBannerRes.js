const SpecialBanner = {
    Query: {
        specialBanners: async (_, args, context, info)=>{
            return await context.prisma.query.specialBanners({...args},info)
        },
        specialBanner: async (_, args, context, info)=>{
            return await context.prisma.query.specialBanner({...args},info)
        },
    },
    Mutation: {
        createSpecialBanner: async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.createSpecialBanner({...args},info)

          return y;
        },
        updateSpecialBanner: async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.updateSpecialBanner({...args},info)
            return y;
        },
        deleteSpecialBanner: async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.deleteSpecialBanner({...args},info)
            return y;
        }
    },
}

module.exports= SpecialBanner;