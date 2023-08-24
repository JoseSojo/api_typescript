import { PrismaClient } from "@prisma/client";

const StartStatus = async () => {
    const TableStatus = [
        { status:'published' },
        { status:'blocked' },
        { status:'delete' },
        { status:'ignore' },
        { status:'none' }
    ];
    const prisma = new PrismaClient();
    const test = await prisma.appConfig.findFirst({ where:{configTitle:'STATUS'} });

    if(test === null) return false;
    
    
    const result = await prisma.status.createMany({ data:TableStatus });

    const config = await prisma.appConfig.create({ 
        data: {
            configTitle:'STATUS',
            configComent:'CREATE_STATUS_BASIC',
            configStatus:true
        } 
    });

    return result;
}

const GetAllStatus = async () => {
    const prisma = new PrismaClient();

    const result = await prisma.status.findMany();
    return result;
}

const PublishedTaskService = async (id:number) => {
    const prisma = new PrismaClient();

    const result = await prisma.task.update({
        where: { taskId:id },
        data: { statusId:1 }
    })

    return result;
}

const BlockTaskService = async (id:number) => {
    const prisma = new PrismaClient();

    const result = await prisma.task.update({
        where: { taskId:id },
        data: { statusId:2 }
    })

    return result;
}

const DeleteTaskService = async (id:number) => {
    const prisma = new PrismaClient();

    const result = await prisma.task.update({
        where: { taskId:id },
        data: { statusId:3 }
    })

    return result;
}

const IgnoreTaskService = async (id:number) => {
    const prisma = new PrismaClient();

    const result = await prisma.task.update({
        where: { taskId:id },
        data: { statusId:4 }
    })

    return result;
}

export { StartStatus, GetAllStatus, BlockTaskService, IgnoreTaskService,PublishedTaskService, DeleteTaskService };