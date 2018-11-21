const studyLevel = {
    Query: {
        studyLevelOnes: (_, args, context, info)=>{
            return context.prisma.query.studyLevelOnes({...args},info)
        },
        studyLevelOne: (_, args, context, info)=>{
            return context.prisma.query.studyLevelOne({...args},info)
        },
        studyLevelTwoes: (_, args, context, info)=>{
            return context.prisma.query.studyLevelTwoes({...args},info)
        },
        studyLevelTwo: (_, args, context, info)=>{
            return context.prisma.query.studyLevelTwoe({...args},info)
        },
    },
    Mutation: {
        createStudyLevelOne : async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.createStudyLevelOne({...args},info)
          return y;
        },
        updateStudyLevelOne : async (_,args, context, info)=>{

            const y = await  context.prisma.mutation.updateStudyLevelOne({...args},info)

            return y;
        },
        deleteStudyLevelOne: async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.deleteStudyLevelOne({...args},info)

            return y;
        },
        createStudyLevelTwo : async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.createStudyLevelTwo({...args},info)
          return y;
        },
        updateStudyLevelTwo : async (_,args, context, info)=>{

            const y = await  context.prisma.mutation.updateStudyLevelTwo({...args},info)

            return y;
        },
        deleteStudyLevelTwo: async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.deleteStudyLevelTwo({...args},info)

            return y;
        },
    },
}

module.exports= studyLevel;