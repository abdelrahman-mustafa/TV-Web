const StudentTermEvaluation= {
    Query: {
       studentTermEvaluations: async (_, args, context, info)=>{
           const StudentTermEvaluationss = await context.prisma.query.studentTermEvaluations({...args}, info)
           return StudentTermEvaluationss
       },
       studentTermEvaluation: async (_, args, context, info)=>{
           const oneStudentTermEvaluations = await context.prisma.query.studentTermEvaluation({...args}, info)
           if (! oneStudentTermEvaluations) return "Not Found"
           return oneStudentTermEvaluations
       },
    },
    Mutation: {
        createStudentTermEvaluation: async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.createStudentTermEvaluation({
               ...args
            },info)

          return y;
        },
        updateStudentTermEvaluation: async (_,args, context, info)=>{
            const updatedStudentTermEvaluation= await  context.prisma.mutation.updateStudentTermEvaluation({
              ...args
            }, info)

            return updatedStudentTermEvaluation;
        },
        deleteStudentTermEvaluation: async (_,args, context, info)=>{
            const done = await  context.prisma.mutation.deleteStudentTermEvaluation({
                ...args
              }, info)

            return done;
        },
    },
}

module.exports= StudentTermEvaluation;