"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const PORT = 8000;
_1.default.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
