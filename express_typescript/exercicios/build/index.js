"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = __importDefault(require("./route/user.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/user', user_routes_1.default);
// TESTE DE FUNCIONAMENTO BASICO
app.get('/', (_req, res) => {
    res.status(200).send('Express + TypeScript');
});
exports.default = app;
