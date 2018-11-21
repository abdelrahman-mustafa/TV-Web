const genericData = {
    Query: {
        cities: async(_, args, context, info) =>{
            return await context.prisma.query.cities ({...args}, info)
        },
        city: async(_, args, context, info) =>{
            return await context.prisma.query.city ({...args}, info)
        },
        geoArea: async(_, args, context, info) =>{
            return await context.prisma.query.geoArea ({...args}, info)
        },
        geoAreas: async(_, args, context, info) =>{
            return await context.prisma.query.geoAreas ({...args}, info)
        },
        studyYears: async(_, args, context, info) =>{
            return await context.prisma.query.studyYears ({...args}, info)
        },
        studyYear: async(_, args, context, info) =>{
            return await context.prisma.query.studyYear ({...args}, info)
        },
        levelTwo: async(_, args, context, info) =>{
            return await context.prisma.query.levelTwo ({...args}, info)
        },
        levelOne: async(_, args, context, info) =>{
            return await context.prisma.query.levelOne ({...args}, info)
        },
        levelThree: async(_, args, context, info) =>{
            return await context.prisma.query.levelThree ({...args}, info)
        },
        levelTwoes: async(_, args, context, info) =>{
            return await context.prisma.query.levelTwoes ({...args}, info)
        },
        levelOnes: async(_, args, context, info) =>{
            return await context.prisma.query.levelOnes ({...args}, info)
        },
        levelThrees: async(_, args, context, info) =>{
            return await context.prisma.query.levelThrees ({...args}, info)
        },
        

    }, 
    Mutation:{

        createCity: async(_, args, context, info) =>{
            return await context.prisma.mutation.createCity ({...args}, info)
        },
        createLevelThree: async(_, args, context, info) =>{
            return await context.prisma.mutation.createLevelThree ({...args}, info)
        },

        createLevelTwo: async(_, args, context, info) =>{
            return await context.prisma.mutation.createLevelTwo ({...args}, info)
        },
        createGeoArea: async(_, args, context, info) =>{
            return await context.prisma.mutation.createGeoArea ({...args}, info)
        },
        createLevelOne: async(_, args, context, info) =>{
            return await context.prisma.mutation.createLevelOne ({...args}, info)
        },
        createStudyYear: async(_, args, context, info) =>{
            return await context.prisma.mutation.createStudyYear ({...args}, info)
        },
        updateGeoArea: async(_, args, context, info) =>{
            return await context.prisma.mutation.updateGeoArea ({...args}, info)
        },
        updateLevelTwo: async(_, args, context, info) =>{
            return await context.prisma.mutation.updateLevelTwo ({...args}, info)
        },
        updateLevelOne: async(_, args, context, info) =>{
            return await context.prisma.mutation.updateLevelOne ({...args}, info)
        },
        updateLevelThree: async(_, args, context, info) =>{
            return await context.prisma.mutation.updateLevelThree ({...args}, info)
        },
        updateCity: async(_, args, context, info) =>{
            return await context.prisma.mutation.updateCity ({...args}, info)
        },
        updateStudyYear: async(_, args, context, info) =>{
            return await context.prisma.mutation.updateStudyYear ({...args}, info)
        },


        
        deleteStudyYear: async(_, args, context, info) =>{
            return await context.prisma.mutation.deleteStudyYear ({...args}, info)
        },
        deleteCity: async(_, args, context, info) =>{
            return await context.prisma.mutation.deleteCity ({...args}, info)
        },
        deleteLevelTwo: async(_, args, context, info) =>{
            return await context.prisma.mutation.deleteLevelTwo ({...args}, info)
        },
        deleteLevelOne: async(_, args, context, info) =>{
            return await context.prisma.mutation.deleteLevelOne ({...args}, info)
        },
        deleteGeoArea: async(_, args, context, info) =>{
            return await context.prisma.mutation.deleteGeoArea ({...args}, info)
        },
        deleteLevelThree: async(_, args, context, info) =>{
            return await context.prisma.mutation.deleteLevelThree ({...args}, info)
        },

                    
    },
}

module.exports = genericData;