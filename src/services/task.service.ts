import { PrismaClient } from "@prisma/client";
import { TaskGeneric, NewTask } from '../interface/task.interface';

const ServiceGetAll = async (uid:number) => {
    const prisma = new PrismaClient();
    const results = await prisma.task.findMany({
        where: {
            AND: [
                { 
                    OR: [
                        {statusId:1},
                        {statusId:2},
                        {statusId:4}
                    ]
                 },
                { userId:uid }
            ]
        },
        include: {
            statusRelation: true
        }
    });
    return results;
}

const ServiceGetById = async (id:number,uid:number) => {
    const prisma = new PrismaClient();
    const result = await prisma.task.findFirst({
        where:{
            AND: [
                { statusId:1 },
                { userId:uid }
            ]
        },
        include: {
            statusRelation: true
        }
    });
    return result;
}

const ServiceCreateTask = async (save: NewTask, userPk:string) => {
    const {title, description} = save;
    const prisma = new PrismaClient();
    const result = await prisma.task.create({ data:{title,description,statusId:1,userId:parseInt(userPk)} });

    return result;
}

const ServiceUpdateTask = async (id:number, up: TaskGeneric) => {
    const {title,description} = up;
    const prisma = new PrismaClient();
    const result = await prisma.task.update({ where:{taskId:id}, data:{title,description} });

    return result;
}

const ServiceDeleteTask = async (id:string) => {
    const prisma = new PrismaClient();
    const result = await prisma.task.delete({ where:{taskId:parseInt(id)} });

    return result;
}

export { ServiceGetAll, ServiceCreateTask, ServiceGetById, ServiceUpdateTask, ServiceDeleteTask };
