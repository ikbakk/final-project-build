"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unknownEndpoint = void 0;
const unknownEndpoint = (req, res) => {
    res.status(404).send('Endpoint not found');
};
exports.unknownEndpoint = unknownEndpoint;
