"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleHTTPErrorStatus = exports.handleHTTPError = void 0;
const handleHTTPError = (code, res, error) => {
    if (error)
        console.log(error);
    return res
        .status(500)
        .json({ response: code, error, body: null });
};
exports.handleHTTPError = handleHTTPError;
const handleHTTPErrorStatus = (code, res, error) => {
    if (error)
        console.log(error);
    return res
        .status(500)
        .json({ response: code, error, body: null });
};
exports.handleHTTPErrorStatus = handleHTTPErrorStatus;
