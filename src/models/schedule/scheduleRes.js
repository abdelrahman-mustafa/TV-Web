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
            if (Array.isArray(time)) time = time[1].split("Z");
            else time = time.split("Z");
            const timeNow = "1970-01-01T"+time+"Z"
            const date = new Date(args.date);
            let day = date.getDay();
            const weekday = new Array(7);
            weekday[0] =  "Sun";
            weekday[1] = "Mon";
            weekday[2] = "Tue";
            weekday[3] = "Wed";
            weekday[4] = "Thu";
            weekday[5] = "Fri";
            weekday[6] = "Sat";
            const dayName = weekday[day.getDay()];
            const results = await context.prisma.query.schedules({
                where:{ days_some:{name: dayName},AND:{startDate_lte:args.date, endDate_gte:args.date ,timeDate_lte: timeNow ,finishTimeDate_gte: timeNow}} 
             },info)
             console.log(results)
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