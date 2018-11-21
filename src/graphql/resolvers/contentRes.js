const content =  {
    Query: {
        contentLevelFours: async (_, args,context, info)=>{
            return await context.prisma.query.contentLevelFours({...args}, info)
        },
        contentLevelOnes: async(_, args, context, info)=>{
            const levelOnes =   await context.prisma.query.contentLevelOnes({...args},info)
            if (levelOnes) return levelOnes
            return 'not found'
        },
        contentLevelTwoes:async (_, args,context, info)=>{
            return await context.prisma.query.contentLevelTwoes({...args}, info)

        },
        contentLevelThrees: async (_, args,context, info)=>{
            return await context.prisma.query.contentLevelThrees({...args}, info)
        },
        contentLevelTwo: async(_, args,context, info)=>{
            return await context.prisma.query.contentLevelTwo({...args}, info)
        },
        contentLevelFour: async(_, args,context, info)=>{
            return await context.prisma.query.contentLevelFour({...args}, info)
        },
        contentLevelOne:async (_, args,context, info)=>{
            return await context.prisma.query.contentLevelOne({...args}, info)
        },
        contentLevelThree: async(_, args,context, info)=>{
            return await context.prisma.query.contentLevelThree({...args}, info)
        },
    },
    Mutation: {
        createContentLevelOne: async(_, args,context, info)=>{
            return await context.prisma.mutation.createContentLevelOne({...args}, info)
        },
        createContentLevelFour: async(_, args,context, info)=>{
            return await context.prisma.mutation.createContentLevelFour({...args}, info)
        },
        updateContentLevelTwo: async(_, args,context, info)=>{
            return await context.prisma.mutation.updateContentLevelTwo({...args}, info)
        },
        updateContentLevelFour: async(_, args,context, info)=>{
            return await context.prisma.mutation.updateContentLevelFour({...args}, info)
        },
        updateContentLevelThree: async(_, args,context, info)=>{
            return await context.prisma.mutation.updateContentLevelThree({...args}, info)
        },
        updateContentLevelOne: async(_, args,context, info)=>{
            return await context.prisma.mutation.updateContentLevelOne({...args}, info)
        },
        deleteContentLevelTwo: async(_, args,context, info)=>{
            return await context.prisma.mutation.deleteContentLevelTwo({...args}, info)
        },
        deleteContentLevelFour: async(_, args,context, info)=>{
            return await context.prisma.mutation.deleteContentLevelFour({...args}, info)
        },
        deleteContentLevelOne: async(_, args,context, info)=>{
            return await context.prisma.mutation.deleteContentLevelOne({...args}, info)
        },
        deleteContentLevelThree: async(_, args,context, info)=>{
            return await context.prisma.mutation.deleteContentLevelThree({...args}, info)
        },
              
    },
}

module.exports= content;