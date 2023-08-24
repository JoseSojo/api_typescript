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
exports.DeleteTaskService = exports.PublishedTaskService = exports.IgnoreTaskService = exports.BlockTaskService = exports.GetAllStatus = exports.StartStatus = void 0;
const client_1 = require("@prisma/client");
const StartStatus = () => __awaiter(void 0, void 0, void 0, function* () {
    const TableStatus = [
        { status: 'published' },
        { status: 'blocked' },
        { status: 'delete' },
        { status: 'ignore' },
        { status: 'none' }
    ];
    const prisma = new client_1.PrismaClient();
    const test = yield prisma.appConfig.findFirst({ where: { configTitle: 'STATUS' } });
    if (test === null)
        return false;
    const result = yield prisma.status.createMany({ data: TableStatus });
    const config = yield prisma.appConfig.create({
        data: {
            configTitle: 'STATUS',
            configComent: 'CREATE_STATUS_BASIC',
            configStatus: true
        }
    });
    return result;
});
exports.StartStatus = StartStatus;
const GetAllStatus = () => __awaiter(void 0, void 0, void 0, function* () {
    const prisma = new client_1.PrismaClient();
    const result = yield prisma.status.findMany();
    return result;
});
exports.GetAllStatus = GetAllStatus;
const PublishedTaskService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const prisma = new client_1.PrismaClient();
    const result = yield prisma.task.update({
        where: { taskId: id },
        data: { statusId: 1 }
    });
    return result;
});
exports.PublishedTaskService = PublishedTaskService;
const BlockTaskService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const prisma = new client_1.PrismaClient();
    const result = yield prisma.task.update({
        where: { taskId: id },
        data: { statusId: 2 }
    });
    return result;
});
exports.BlockTaskService = BlockTaskService;
const DeleteTaskService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const prisma = new client_1.PrismaClient();
    const result = yield prisma.task.update({
        where: { taskId: id },
        data: { statusId: 3 }
    });
    return result;
});
exports.DeleteTaskService = DeleteTaskService;
const IgnoreTaskService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const prisma = new client_1.PrismaClient();
    const result = yield prisma.task.update({
        where: { taskId: id },
        data: { statusId: 4 }
    });
    return result;
});
exports.IgnoreTaskService = IgnoreTaskService;
