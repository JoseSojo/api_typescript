import { ServiceLogin, ServiceRegister } from "../services/auth.service";
import { RequestExtend } from "../interface/jwt.interface";
import { Request, Response } from "express";
import { handleHTTPError } from '../utils/httpError.util';

const LoginCtrl = async ({body}:RequestExtend, res:Response) => {
    try {
        const {email, password} = body;
        const responseService = await ServiceLogin({email,password});

        return res
            .status(200)
            .cookie("token",responseService.token)
            .json({ response:'SUCCESS_LOGIN', body:responseService });

    } catch (error) {
        handleHTTPError('ERR_LOGIN', res, error);
    }
}

const RegisterCtrl = async({body}:RequestExtend, res:Response) => {
    try {
        const {email,username,password} = body;
        const responseService = await ServiceRegister({email,username,password});

        return res
            .status(200)
            .json({ response:'SUCCESS_REGISTER', body:responseService });
    } catch (error) {
        handleHTTPError('ERR_REGISTER', res, error);
    }
}

export { LoginCtrl, RegisterCtrl }