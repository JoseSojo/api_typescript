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
exports.ChangePublishedCtrl = exports.ChangeBlokedCtrl = exports.ChangeIgnoreCtrl = exports.ChangeDeleteCtrl = exports.TestingStatus = exports.GenerateStatus = void 0;
const status_service_1 = require("../services/status.service");
const httpError_util_1 = require("../utils/httpError.util");
const GenerateStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseService = yield (0, status_service_1.StartStatus)();
        if (!responseService)
            return res.status(500).json({ response: 'ERRR', body: 'error' });
        return res.status(200).json({ response: 'STATUS_CREATE', body: true });
    }
    catch (error) {
        console.log(error);
    }
});
exports.GenerateStatus = GenerateStatus;
const TestingStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseService = yield (0, status_service_1.GetAllStatus)();
        return res
            .status(200)
            .json({ response: 'GET_ALL_STATUS', body: responseService });
    }
    catch (error) {
        return res.status(500).json({ response: 'ERRR', body: error });
    }
});
exports.TestingStatus = TestingStatus;
const ChangeDeleteCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseService = (0, status_service_1.DeleteTaskService)(parseInt(req.params.id));
        return res
            .status(200)
            .json({ response: 'SUCCESS_STATUS_CHANGE_DELETE', body: responseService });
    }
    catch (error) {
        (0, httpError_util_1.handleHTTPErrorStatus)('ERR_DELETE_TASK_STATUS', res, error);
    }
});
exports.ChangeDeleteCtrl = ChangeDeleteCtrl;
const ChangeIgnoreCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseService = (0, status_service_1.IgnoreTaskService)(parseInt(req.params.id));
        return res
            .status(200)
            .json({ response: 'SUCCESS_STATUS_CHANGE_IGNORE', body: responseService });
    }
    catch (error) {
        (0, httpError_util_1.handleHTTPErrorStatus)('ERR_IGNORE_TASK_STATUS', res, error);
    }
});
exports.ChangeIgnoreCtrl = ChangeIgnoreCtrl;
const ChangeBlokedCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseService = (0, status_service_1.BlockTaskService)(parseInt(req.params.id));
        return res
            .status(200)
            .json({ response: 'SUCCESS_STATUS_CHANGE_BLOKED', body: responseService });
    }
    catch (error) {
        (0, httpError_util_1.handleHTTPErrorStatus)('ERR_BLOCKED_TASK_STATUS', res, error);
    }
});
exports.ChangeBlokedCtrl = ChangeBlokedCtrl;
const ChangePublishedCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseService = (0, status_service_1.PublishedTaskService)(parseInt(req.params.id));
        return res
            .status(200)
            .json({ response: 'SUCCESS_STATUS_CHANGE_PUBLISHED', body: responseService });
    }
    catch (error) {
        (0, httpError_util_1.handleHTTPErrorStatus)('ERR_PUBLISHED_TASK_STATUS', res, error);
    }
});
exports.ChangePublishedCtrl = ChangePublishedCtrl;
