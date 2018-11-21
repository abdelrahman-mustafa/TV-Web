const geneSpecificClassConfig = {
    Query: {
       specificClassConfigs: async (_, args, context, info)=>{
           const specificClassConfigs = await context.prisma.query.specificClassConfigs({...args}, info)
           return specificClassConfigs
       },
       specificClassConfig : async (_, args, context, info)=>{
           const oneSpecificClassConfig = await context.prisma.query.specificClassConfig({...args}, info)
           if (! oneSpecificClassConfig) return "Not Found"
           return oneSpecificClassConfig
       },
    },
    Mutation: {
        createSpecificClassConfig : async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.createSpecificClassConfig({
               ...args
            },info)

          return y;
        },
        updateSpecificClassConfig : async (_,args, context, info)=>{
            const updatedspecificClassConfig = await  context.prisma.mutation.updateSpecificClassConfig({
              ...args
            }, info)

            return updatedspecificClassConfig;
        },
        deleteSpecificClassConfig: async (_,args, context, info)=>{
            const done = await  context.prisma.mutation.deleteSpecificClassConfig({
                ...args
              }, info)

            return done;
        },
    },
}

module.exports= geneSpecificClassConfig;