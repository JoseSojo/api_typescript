"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRegister = exports.ServiceLogin = void 0;
const client_1 = require("@prisma/client");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const ServiceLogin = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const prisma = new client_1.PrismaClient();
    const FoundUser = yield prisma.user.findUnique({ where: { email: data.email } });
    if (!FoundUser)
        throw new Error('Verifica tus datos.');
    const compare = yield bcryptjs_1.default.compare(data.password, FoundUser.password);
    if (!compare)
        throw new Error('Verifica tus datos.');
    // Creando TOKEN de acceso por el userid.
    const token = jsonwebtoken_1.default.sign({ userid: FoundUser.userId.toString() }, 'SECRET_KEY', {
        expiresIn: '1 day'
    });
    return { user: FoundUser, token };
});
exports.ServiceLogin = ServiceLogin;
const ServiceRegister = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const prisma = new client_1.PrismaClient();
    const { username, password, email } = data;
    const newUser = { username, password, email };
    newUser.password = yield bcryptjs_1.default.hash(newUser.password, 9);
    const userRegister = yield prisma.user.create({ data: newUser });
    return userRegister;
});
exports.ServiceRegister = ServiceRegister;
