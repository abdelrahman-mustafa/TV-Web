const evaluation= {
    Query: {
        evaluationStateses: async (_, args, context, info)=>{
            return await context.prisma.query.evaluationStateses({},info)
        },
        evaluationOptionses: async (_, args, context, info)=>{
            return await context.prisma.query.evaluationOptionses({},info)
        },
        evaluationStatuses: async (_, args, context, info)=>{
            return await context.prisma.query.evaluationStatuses({},info)
        },
        evaluationResults: async (_, args, context, info)=>{
            return await context.prisma.query.evaluationResults({},info)
        },
        evaluationGradeses: async (_, args, context, info)=>{
            return await context.prisma.query.evaluationGradeses({},info)
        },
        evaluations: async (_, args, context, info)=>{
            return await context.prisma.query.evaluations({},info)
        },
        evaluationStates: async (_, args, context, info)=>{
            return await context.prisma.query.evaluationStates({},info)
        },
        evaluationOptions: async (_, args, context, info)=>{
            return await context.prisma.query.evaluationOptions({},info)
        },
        evaluationStatus: async (_, args, context, info)=>{
            return await context.prisma.query.evaluationStatus({},info)
        },
        evaluationResult: async (_, args, context, info)=>{
            return await context.prisma.query.evaluationResult({},info)
        },
        evaluationGrades: async (_, args, context, info)=>{
            return await context.prisma.query.evaluationGrades({},info)
        },
        evaluation: async (_, args, context, info)=>{
            return await context.prisma.query.evaluation({},info)
        },
        question: async (_, args, context, info)=>{
            return await context.prisma.query.question({},info)
        },
        questionType: async (_, args, context, info)=>{
            return await context.prisma.query.questionType({},info)
        },
        questions: async (_, args, context, info)=>{
            return await context.prisma.query.questions({},info)
        },
        questionTypes: async (_, args, context, info)=>{
            return await context.prisma.query.questionTypes({},info)
        },
        
    },
    Mutation: {
        createEvaluationOptions: async (_, args, context, info)=>{
            return await context.prisma.mutation.createEvaluationOptions({...args},info)
        },
        createEvaluationStates: async (_, args, context, info)=>{
            return await context.prisma.mutation.createEvaluationStates({...args},info)
        },
        createEvaluationStatus: async (_, args, context, info)=>{
            return await context.prisma.mutation.createEvaluationStatus({...args},info)
        },
        createEvaluationResult: async (_, args, context, info)=>{
            return await context.prisma.mutation.createEvaluationResult({...args},info)
        },
        createEvaluationGrades: async (_, args, context, info)=>{
            return await context.prisma.mutation.createEvaluationGrades({...args},info)
        },
        createEvaluation: async (_, args, context, info)=>{
            return await context.prisma.mutation.createEvaluation({...args},info)
        },
        updateEvaluationStates: async (_, args, context, info)=>{
            return await context.prisma.mutation.updateEvaluationStates({...args},info)
        },
        updateEvaluationOptions: async (_, args, context, info)=>{
            return await context.prisma.mutation.updateEvaluationOptions({...args},info)
        },
        updateEvaluationStatus: async (_, args, context, info)=>{
            return await context.prisma.mutation.updateEvaluationStatus({...args},info)
        },
        updateEvaluationResult: async (_, args, context, info)=>{
            return await context.prisma.mutation.updateEvaluationResult({...args},info)
        },
        updateEvaluationGrades: async (_, args, context, info)=>{
            return await context.prisma.mutation.updateEvaluationGrades({...args},info)
        },
        updateEvaluation: async (_, args, context, info)=>{
            return await context.prisma.mutation.updateEvaluation({...args},info)
        },
        deleteEvaluationStates: async (_, args, context, info)=>{
            return await context.prisma.mutation.deleteEvaluationStates({...args},info)
        },
        deleteEvaluationOptions: async (_, args, context, info)=>{
            return await context.prisma.mutation.deleteEvaluationOptions({...args},info)
        },
        deleteEvaluationStatus: async (_, args, context, info)=>{
            return await context.prisma.mutation.deleteEvaluationStatus({...args},info)
        },
        deleteEvaluationResult: async (_, args, context, info)=>{
            return await context.prisma.mutation.deleteEvaluationResult({...args},info)
        },
        deleteEvaluationGrades: async (_, args, context, info)=>{
            return await context.prisma.mutation.deleteEvaluationGrades({...args},info)
        },
        deleteEvaluation: async (_, args, context, info)=>{
            return await context.prisma.mutation.deleteEvaluation({...args},info)
        },
        createQuestionType: async (_, args, context, info)=>{
            return await context.prisma.mutation.createQuestionType({...args},info)
        },
        createQuestion: async (_, args, context, info)=>{
            return await context.prisma.mutation.createQuestion({...args},info)
        },
        updateQuestionType: async (_, args, context, info)=>{
            return await context.prisma.mutation.updateQuestionType({...args},info)
        },
        updateQuestion: async (_, args, context, info)=>{
            return await context.prisma.mutation.updateQuestion({...args},info)
        },
        deleteQuestionType: async (_, args, context, info)=>{
            return await context.prisma.mutation.deleteQuestionType({...args},info)
        },
        deleteQuestion: async (_, args, context, info)=>{
            return await context.prisma.mutation.deleteQuestion({...args},info)
        },
    },
}
   

module.exports = evaluation;