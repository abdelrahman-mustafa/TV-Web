const licensedTerm = {
    Query: {
       licensedTerms: async (_, args, context, info)=>{
           const licensedTerms = await context.prisma.query.licensedTerms({...args}, info)
           return licensedTerms
       },
       licensedTerm : async (_, args, context, info)=>{
           try { 
               const licensedTerm = await context.prisma.query.licensedTerms({...args}, info)
               return licensedTerm;
            } catch (error) {
                return  error;
            }
       },
    },
    Mutation: {
        createLicensedTerm : async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.createLicensedTerm({
                args
            },info)

          return y;
        },
        updateLicensedTerm : async (_,args, context, info)=>{

            const updatedLicensedTerm = await  context.prisma.mutation.updateLicensedTerm({
                args,
            }, info)

            return updatedLicensedTerm;
        },
        deleteLicensedTerm: async (_,args, context, info)=>{
            const done = await  context.prisma.mutation.deleteLicensedTerm({...args}, info)

            return done;
        },
    },
}

module.exports= licensedTerm;