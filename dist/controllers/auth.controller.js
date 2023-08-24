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
exports.RegisterCtrl = exports.LoginCtrl = void 0;
const auth_service_1 = require("../services/auth.service");
const httpError_util_1 = require("../utils/httpError.util");
const LoginCtrl = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = body;
        const responseService = yield (0, auth_service_1.ServiceLogin)({ email, password });
        return res
            .status(200)
            .cookie("token", responseService.token)
            .json({ response: 'SUCCESS_LOGIN', body: responseService });
    }
    catch (error) {
        (0, httpError_util_1.handleHTTPError)('ERR_LOGIN', res, error);
    }
});
exports.LoginCtrl = LoginCtrl;
const RegisterCtrl = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, username, password } = body;
        const responseService = yield (0, auth_service_1.ServiceRegister)({ email, username, password });
        return res
            .status(200)
            .json({ response: 'SUCCESS_REGISTER', body: responseService });
    }
    catch (error) {
        (0, httpError_util_1.handleHTTPError)('ERR_REGISTER', res, error);
    }
});
exports.RegisterCtrl = RegisterCtrl;
