const event = {
    Query: {
        events: (_, args, context, info)=>{
            return context.prisma.query.events({...args},info)
        },
        event: (_, args, context, info)=>{
            return context.prisma.query.event({...args},info)
        },
    },
    Mutation: {
        createEvent : async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.createEvent({...args},info)

          return y;
        },
        updateEvent : async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.updateEvent({...args},info)
            return y;
        },
        deleteEvent: async (_,args, context, info)=>{
            const y = await  context.prisma.mutation.deleteEvent({...args},info)
            return y;
        }
    },
}

module.exports= event;