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
exports.DeleteTaskByIdCtrl = exports.UpdateTaskByIdCtrl = exports.CreateNewTaskCtrl = exports.GetTaskByIdCtrl = exports.GetTaskAllCtrl = void 0;
const httpError_util_1 = require("../utils/httpError.util");
const task_service_1 = require("../services/task.service");
const GetTaskAllCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseService = yield (0, task_service_1.ServiceGetAll)(parseInt(req.user.userid));
        return res
            .status(200)
            .json({ response: 'SUCCESS_TASK_GETTING', body: responseService });
    }
    catch (error) {
        (0, httpError_util_1.handleHTTPError)('ERR_GET_ALL_TASK', res, error);
    }
});
exports.GetTaskAllCtrl = GetTaskAllCtrl;
const GetTaskByIdCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resposneService = yield (0, task_service_1.ServiceGetById)(parseInt(req.params.id), parseInt(req.user.userid));
        return res
            .status(200)
            .json({ response: 'SUCCESS_GET_BY_ID', body: resposneService });
    }
    catch (error) {
        (0, httpError_util_1.handleHTTPError)('ERR_GET_TASK_BY_ID', res, error);
    }
});
exports.GetTaskByIdCtrl = GetTaskByIdCtrl;
const CreateNewTaskCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newTask = {
            title: req.body.title,
            description: req.body.description
        };
        const responseService = yield (0, task_service_1.ServiceCreateTask)(newTask, req.user.userid);
        return res
            .status(200)
            .json({ response: 'SUCCESS_CREATE_TASK', body: responseService });
    }
    catch (error) {
        (0, httpError_util_1.handleHTTPError)('ERR_CREATE_NEW_TASK', res, error);
    }
});
exports.CreateNewTaskCtrl = CreateNewTaskCtrl;
const UpdateTaskByIdCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateTask = {
            title: req.body.title,
            description: req.body.description
        };
        const responseService = yield (0, task_service_1.ServiceUpdateTask)(parseInt(req.params.id), updateTask);
        return res
            .status(200)
            .json({ response: 'SUCCESS_UPDATE_TASK', body: responseService });
    }
    catch (error) {
        (0, httpError_util_1.handleHTTPError)('ERR_UPDATE_TASK_BY_ID', res, error);
    }
});
exports.UpdateTaskByIdCtrl = UpdateTaskByIdCtrl;
const DeleteTaskByIdCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseService = yield (0, task_service_1.ServiceDeleteTask)(req.params.id);
        return res
            .status(200)
            .json({ response: 'SUCCESS_DELETE_TASK' });
    }
    catch (error) {
        (0, httpError_util_1.handleHTTPError)('ERR_DELETE_TASK_BY_ID', res, error);
    }
});
exports.DeleteTaskByIdCtrl = DeleteTaskByIdCtrl;
