import { Request, Response } from "express";
import { handleHTTPError } from '../utils/httpError.util';
import { NewTask, TaskGeneric } from '../interface/task.interface';
import { RequestExtend } from "../interface/jwt.interface";
import { ServiceGetAll, ServiceCreateTask, ServiceGetById, ServiceUpdateTask, ServiceDeleteTask } from '../services/task.service';

const GetTaskAllCtrl = async (req:RequestExtend, res:Response) => {
    try {
        const responseService = await ServiceGetAll(parseInt(req.user.userid));

        return res
            .status(200)
            .json({ response:'SUCCESS_TASK_GETTING', body:responseService });

    } catch (error) {
        handleHTTPError('ERR_GET_ALL_TASK', res, error);
    }
}

const GetTaskByIdCtrl = async (req:RequestExtend, res:Response) => {
    try {
        const resposneService = await ServiceGetById(parseInt(req.params.id), parseInt(req.user.userid));

        return res
            .status(200)
            .json({ response:'SUCCESS_GET_BY_ID', body:resposneService });

    } catch (error) {
        handleHTTPError('ERR_GET_TASK_BY_ID', res, error);
    }
}

const CreateNewTaskCtrl = async (req:RequestExtend, res:Response) => {
    try {
        const newTask:TaskGeneric = {
            title: req.body.title,
            description: req.body.description
        }
        const responseService = await ServiceCreateTask(newTask, req.user.userid);

        return res
            .status(200)
            .json({ response:'SUCCESS_CREATE_TASK', body:responseService });

    } catch (error) {
        handleHTTPError('ERR_CREATE_NEW_TASK', res, error);
    }
}

const UpdateTaskByIdCtrl = async (req:Request, res:Response) => {
    try {  
        const updateTask:TaskGeneric = {
            title:req.body.title,
            description:req.body.description
        }

        const responseService = await ServiceUpdateTask(parseInt(req.params.id), updateTask);

        return res 
            .status(200)
            .json({ response:'SUCCESS_UPDATE_TASK', body:responseService });

    } catch (error) {
        handleHTTPError('ERR_UPDATE_TASK_BY_ID', res, error);
    }
}

const DeleteTaskByIdCtrl = async (req:Request, res:Response) => {
    try {
        const responseService = await ServiceDeleteTask(req.params.id);

        return res
            .status(200)
            .json({ response:'SUCCESS_DELETE_TASK' });
            
    } catch (error) {
        handleHTTPError('ERR_DELETE_TASK_BY_ID', res, error);
    }
}


export { GetTaskAllCtrl, GetTaskByIdCtrl, CreateNewTaskCtrl, UpdateTaskByIdCtrl, DeleteTaskByIdCtrl };
