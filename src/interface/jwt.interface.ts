import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

export interface RequestExtend extends Request {
    user?: any
}

export interface CustomRequets {
    d?:string;
    token?:string|JwtPayload
}
