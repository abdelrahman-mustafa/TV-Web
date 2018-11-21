const geneClass = {
    Query: {
       classes: async (_, args, context, info)=>{
           const classs = await context.prisma.query.classes({...args}, info)
           return classs
       },
       class : async (_, args, context, info)=>{
           const oneClass = await context.prisma.query.class({...args}, info)
           if (! oneClass) return "Not Found"
           return oneClass
       },
    },
    Mutation: {
        createClass : async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.createClass({
               ...args
            },info)

          return y;
        },
        updateClass : async (_,args, context, info)=>{
            const updatedclass = await  context.prisma.mutation.updateClass({
              ...args
            }, info)

            return updatedclass;
        },
        deleteClass: async (_,args, context, info)=>{
            const done = await  context.prisma.mutation.deleteClass({
                ...args
              }, info)

            return done;
        },
    },
}

module.exports= geneClass;