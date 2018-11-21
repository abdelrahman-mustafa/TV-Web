const schAdm = {
    Query: {
        parents: (_, args, context, info)=>{
            return context.prisma.query.parents({...args},info)
        },
        students: (_, args, context, info)=>{
            return context.prisma.query.students({...args},info)
        },
        teachers: (_, args, context, info)=>{
            return context.prisma.query.teachers({...args},info)
        },
        parent: (_, args, context, info)=>{
          return context.prisma.query.parent({...args},info)
        },
        student: (_, args, context, info)=>{
            return context.prisma.query.student({...args},info)
        },
        teacher: (_, args, context, info)=>{
            return context.prisma.query.teacher({...args},info)
        },
    },
    Mutation: {
        createParent : async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.createParent({...args},info)
          return y;
        },
        updateParent : async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.updateParent({...args},info)

            return y;
        },
        deleteParent: async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.deleteParent({...args},info)

            return y;
        },
        createStudent : async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.createStudent({...args},info)

          return y;
        },
        updateStudent : async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.updateStudent({...args},info)
            return y;
        },
        deleteStudent: async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.deleteStudent({...args},info)
            return y;
        },
        createTeacher : async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.createTeacher({...args},info)

          return y;
        },
        updateTeacher : async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.updateTeacher({...args},info)

            return y;
        },
        deleteTeacher: async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.deleteTeacher({...args},info)
            return y;
        },
    },
}

module.exports= schAdm;