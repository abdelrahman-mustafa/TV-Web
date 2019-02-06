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
            let time = args.time.split("T")
            if (Array.isArray(time)) time = time[1]
            const timeNow = "1970-01-01T"+time
            const results = await context.prisma.query.schedules({
                where:{ days_some:{name: args.day},AND:{startDate_lte:args.date, endDate_gte:args.date ,timeDate_lte: timeNow ,finishTimeDate_gte: timeNow}} 
             },info)
             console.log(results)
             if (results[0].finishTimeDate) throw new Error('there is no current program')
             res.push(results[0])
                const upComing = await context.prisma.query.schedules({
                where:{ days_some:{name:args.day},AND:{startDate_lte:args.date, endDate_gte:args.date,timeDate_gte:results[0].finishTimeDate}},
                orderBy: "timeDate_ASC" 
                },info)
                res.push(upComing[0])
                return res;

        },
        daySchedules: async(_, args, context, info)=>{
            return await context.prisma.query.schedules({
                where:{ days_some:{name: args.day }, AND:{startDate_lte: args.date, AND:{endDate_gte: args.date }}}, 
                orderBy: "timeDate_ASC"
            },info)
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