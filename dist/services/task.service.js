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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDeleteTask = exports.ServiceUpdateTask = exports.ServiceGetById = exports.ServiceCreateTask = exports.ServiceGetAll = void 0;
const client_1 = require("@prisma/client");
const ServiceGetAll = (uid) => __awaiter(void 0, void 0, void 0, function* () {
    const prisma = new client_1.PrismaClient();
    const results = yield prisma.task.findMany({
        where: {
            AND: [
                {
                    OR: [
                        { statusId: 1 },
                        { statusId: 2 },
                        { statusId: 4 }
                    ]
                },
                { userId: uid }
            ]
        },
        include: {
            statusRelation: true
        }
    });
    return results;
});
exports.ServiceGetAll = ServiceGetAll;
const ServiceGetById = (id, uid) => __awaiter(void 0, void 0, void 0, function* () {
    const prisma = new client_1.PrismaClient();
    const result = yield prisma.task.findFirst({
        where: {
            AND: [
                { statusId: 1 },
                { userId: uid }
            ]
        },
        include: {
            statusRelation: true
        }
    });
    return result;
});
exports.ServiceGetById = ServiceGetById;
const ServiceCreateTask = (save, userPk) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description } = save;
    const prisma = new client_1.PrismaClient();
    const result = yield prisma.task.create({ data: { title, description, statusId: 1, userId: parseInt(userPk) } });
    return result;
});
exports.ServiceCreateTask = ServiceCreateTask;
const ServiceUpdateTask = (id, up) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description } = up;
    const prisma = new client_1.PrismaClient();
    const result = yield prisma.task.update({ where: { taskId: id }, data: { title, description } });
    return result;
});
exports.ServiceUpdateTask = ServiceUpdateTask;
const ServiceDeleteTask = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const prisma = new client_1.PrismaClient();
    const result = yield prisma.task.delete({ where: { taskId: parseInt(id) } });
    return result;
});
exports.ServiceDeleteTask = ServiceDeleteTask;
