import { Response, Request } from 'express';
import { 
    StartStatus, 
    GetAllStatus, 
    BlockTaskService, 
    IgnoreTaskService,
    PublishedTaskService,
    DeleteTaskService
} from '../services/status.service';
import { handleHTTPErrorStatus } from '../utils/httpError.util';
import { RequestExtend } from '../interface/jwt.interface';

const GenerateStatus = async (req:Request, res:Response) => {
    try {
        const responseService = await StartStatus();
        if(!responseService) return res.status(500).json({response:'ERRR', body:'error'});
        
        return res.status(200).json({ response:'STATUS_CREATE', body:true });
    } catch (error) {
        console.log(error);
    }
}

const TestingStatus = async (req:Request, res:Response) => {
    try {
        const responseService = await GetAllStatus();

        return res
            .status(200)
            .json({ response:'GET_ALL_STATUS', body:responseService });

    } catch (error) {
        return res.status(500).json({response:'ERRR', body:error});
    }
}

const ChangeDeleteCtrl = async (req:RequestExtend, res:Response) => {
    try {
        const responseService = DeleteTaskService(parseInt(req.params.id));
        return res
            .status(200)
            .json({ response:'SUCCESS_STATUS_CHANGE_DELETE', body:responseService });

    } catch (error) {
        handleHTTPErrorStatus('ERR_DELETE_TASK_STATUS', res, error);
    }
}

const ChangeIgnoreCtrl = async (req:Request, res:Response) => {
    try {
        const responseService = IgnoreTaskService(parseInt(req.params.id));
        return res
            .status(200)
            .json({ response:'SUCCESS_STATUS_CHANGE_IGNORE', body:responseService });

    } catch (error) {
        handleHTTPErrorStatus('ERR_IGNORE_TASK_STATUS', res, error);
    }
}

const ChangeBlokedCtrl = async (req:Request, res:Response) => {
    try {
        const responseService = BlockTaskService(parseInt(req.params.id));
        return res
            .status(200)
            .json({ response:'SUCCESS_STATUS_CHANGE_BLOKED', body:responseService });

    } catch (error) {
        handleHTTPErrorStatus('ERR_BLOCKED_TASK_STATUS', res, error);
    }
}

const ChangePublishedCtrl = async (req:Request, res:Response) => {
    try {
        const responseService = PublishedTaskService(parseInt(req.params.id));
        return res
            .status(200)
            .json({ response:'SUCCESS_STATUS_CHANGE_PUBLISHED', body:responseService });

    } catch (error) {
        handleHTTPErrorStatus('ERR_PUBLISHED_TASK_STATUS', res, error);
    }
}

export { 
    GenerateStatus, 
    TestingStatus,
    ChangeDeleteCtrl,
    ChangeIgnoreCtrl,
    ChangeBlokedCtrl,
    ChangePublishedCtrl
};