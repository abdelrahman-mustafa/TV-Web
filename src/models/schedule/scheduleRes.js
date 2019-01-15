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
                where:{ days_some:{name:args.day},AND:{startDate_lte:args.date, endDate_gte:args.date ,timeDate_lte:args.time,finishTimeDate_gte:args.time}} 
             })
             res.push(results[0])
             if(results[0]){
                const upComing = await context.prisma.query.schedules({
                    where:{ days_some:{name:args.day},AND:{startDate_lte:args.date, endDate_gte:args.date,timeDate_gte:results[0].finishTimeDate}},
                    orderBy: "timeDate_ASC" 
                 },info)
                 res.push(upComing[0])
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