const schedule = {
    Query: {
        schedules: async(_, args, context, info)=>{
            return await context.prisma.query.schedules({...args},info)
        },
        schedule: async (_, args, context, info)=>{
            return await context.prisma.query.schedule({...args},info)
        },
        currentSchedule: async (_, args, context, info)=>{
            let res = []
            const results = await context.prisma.query.schedules({
                where:{ days_some:{name:args.day},endDate_gte:args.date, AND:{startDate_lte:args.date},timeDate_lt:args.time,finishTimeDate_gt:args.time} 
             },info)
             res.push(results[0])
             if(results[0]){
                const upComing = await context.prisma.query.schedules({
                    where:{ days_some:{name:args.day},endDate_gte:args.date, AND:{startDate_lte:args.date},timeDate_lt:results[0].time,finishTimeDate_gt:results[0].time} 
                 },info)
                 res.push(upComing)
                 return res;
             }
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