"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorResponse = void 0;
const errorResponse = (err, res) => {
    var _a, _b;
    const statusCode = (_a = err.statusCode) !== null && _a !== void 0 ? _a : 500;
    const message = (_b = err.message) !== null && _b !== void 0 ? _b : 'Something went wrong';
    const response = res.status(statusCode).json({ status: 'Failed', message });
    return response;
};
exports.errorResponse = errorResponse;
