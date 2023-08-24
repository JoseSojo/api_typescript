import jwt from 'jsonwebtoken';
import { NextFunction, Response, Request } from 'express';
import { RequestExtend } from '../interface/jwt.interface';

const KEY = 'SECRET_KEY';

export const auth = async (req:RequestExtend, res:Response, next:NextFunction) => {
    try {
        const token = req.header('token');

        if (!token) throw new Error('ERR_NOT_AUTHORIZED');

        const decoded = jwt.verify(token, KEY); // Decodificando el TOKEN
        req.user = decoded;
        next()

    } catch (error) {
        res
            .status(401)
            .json({ response:'No Authorizado, inicia sesión.', body:null })
    }
}
