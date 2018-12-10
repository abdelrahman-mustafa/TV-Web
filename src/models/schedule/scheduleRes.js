const schedule = {
    Query: {
        schedules: (_, args, context, info)=>{
            return context.prisma.query.schedules({...args},info)
        },
        schedule: (_, args, context, info)=>{
            return context.prisma.query.schedule({...args},info)
        },
    },
    Mutation: {
        createSchedule : async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.createSchedule({...args},info)

          return y;
        },
        updateSchedule : async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.updateSchedule({...args},info)
            return y;
        },
        deleteSchedule: async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.deleteSchedule({...args},info)
            return y;
        }
    },
}

module.exports= schedule;