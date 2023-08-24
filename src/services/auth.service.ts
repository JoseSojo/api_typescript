import { UserLogin, UserRegister } from '../interface/user.interface';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

const ServiceLogin = async (data:UserLogin) => {
    const prisma = new PrismaClient();
    const FoundUser = await prisma.user.findUnique({ where:{email:data.email} });

    if(!FoundUser) throw new Error('Verifica tus datos.');

    const compare = await bcrypt.compare(data.password, FoundUser.password);
    if(!compare) throw new Error('Verifica tus datos.');

    // Creando TOKEN de acceso por el userid.
    const token = jwt.sign(
        { userid:FoundUser.userId.toString() },
        'SECRET_KEY',
        {
            expiresIn: '1 day'
        }
    );

    return { user:FoundUser, token};
}

const ServiceRegister = async (data:UserRegister) => {
    const prisma = new PrismaClient();
    const {username,password,email} = data;
    const newUser = {username,password,email}
    newUser.password = await bcrypt.hash(newUser.password, 9);

    const userRegister = await prisma.user.create({ data:newUser });
    return userRegister;
}

export { ServiceLogin, ServiceRegister }