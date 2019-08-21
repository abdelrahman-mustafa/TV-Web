const schedule = {
    Query: {
        schedules: async (_, args, context, info) => {
            return await context.prisma.query.schedules({
                ...args
            }, info)
        },
        schedule: async (_, args, context, info) => {
            return await context.prisma.query.schedule({
                ...args
            }, info)
        },
        currentSchedule: async (_, args, context, info) => {
            let res = []
            let days = {
                "Sat": 0,
                "Mon": 1,
                "Sun": 2,
                "Tue": 3,
                "Wed": 4,
                "Thu": 5,
                "Fri": 6,
            }
            let time = args.time.split("T")
            if (Array.isArray(time)) time = time[1]
            const timeNow = "1970-01-01T" + time
            const results = await context.prisma.query.schedules({
                where: {
                    days_some: {
                        name: args.day
                    },
                    AND: {
                        startDate_lte: args.date,
                        endDate_gte: args.date,
                        timeDate_lte: timeNow,
                        finishTimeDate_gte: timeNow
                    }
                }
            }, info)
            console.log(results)
            results.filter(sch=>{
                return ( sch.program && sch.program.isShown )||(sch.event || sch.event.isShown)
            })
            // if (!results[0]) {
            //     // const comResults = await context.prisma.query.schedules({
            //     //     where: { days_some: { name: args.day }, AND: { startDate_gte: args.date, endDate_gte: args.date, timeDate_gte: args.time } },
            //     //     orderBy: "timeDate_ASC"
            //     // }, info)
            //     //  res.push({})
            //     // if (comResults[0]) res.push(comResults[1])
            //     return res
            // }
            // res.push(results[0])

            // if (results[0].finishTimeDate.getDay() - results[0].timeDate.getDay() )
            if (results[0]) {
                res.push(results[0])
                const upComing = await context.prisma.query.schedules({
                    where: {
                        days_some: {
                            name: args.day
                        },
                        AND: {
                            startDate_lte: args.date,
                            endDate_gte: args.date,
                            timeDate_gte: results[0].finishTimeDate
                        }
                    },
                    orderBy: "timeDate_ASC"
                }, info)
                upComing.filter(sch=>{
                    return ( sch.program && sch.program.isShown )||(sch.event || sch.event.isShown)
                })
                if (upComing[0]) res.push(upComing[0])
                return res;
            }else{
                
                const upComing = await context.prisma.query.schedules({
                    where: {
                        days_some: {
                            name: args.day
                        },
                        AND: {
                            startDate_lte: args.date,
                            endDate_gte: args.date,
                            timeDate_gte: timeNow
                        }
                    },
                    orderBy: "timeDate_ASC"
                }, info)
                res.push(null)
                upComing.filter(sch=>{
                    return ( sch.program && sch.program.isShown )||(sch.event || sch.event.isShown)
                })
                if (upComing[0]) res.push(upComing[0])
                return res;
            }

        },
        daySchedules: async (_, args, context, info) => {
            return await context.prisma.query.schedules({
                where: {
                    days_some: {
                        name: args.day
                    },
                    AND: {
                        startDate_lte: args.date,
                        AND: {
                            endDate_gte: args.date
                        }
                    }
                },
                orderBy: "timeDate_ASC"
            }, info)
        },

    },
    Mutation: {
        createSchedule: async (_, args, context, info) => {


            // const results = await context.prisma.query.schedules({
            //     where: { days_some: { name: args.data.day }, AND: { startDate_lte: args.data.startDate, endDate_gte: args.data.endDate, timeDate_lte: args.data.timeDate, finishTimeDate_gte:  args.data.timeDate } }
            // }, info)

            if (args.data.program && !args.data.event) {
                return await context.prisma.mutation.createSchedule({
                    ...args
                }, info)

            } else if (!args.data.program && args.data.event) {
                return await context.prisma.mutation.createSchedule({
                    ...args
                }, info)
            } else {
                throw new Error("please fullfill requirments")
            }
        },
        updateSchedule: async (_, args, context, info) => {
            const y = await context.prisma.mutation.updateSchedule({
                ...args
            }, info)
            return y;
        },
        deleteSchedule: async (_, args, context, info) => {
            const y = await context.prisma.mutation.deleteSchedule({
                ...args
            }, info)
            return y;
        }
    },
}

module.exports = schedule;