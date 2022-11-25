"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resizing_1 = require("./routes/resizing");
const app = (0, express_1.default)();
app.listen("54242", () => {
    console.log(`Server is starting at prot:${54242}`);
});
app.get("/");
app.use('/resizing', resizing_1.imageProcessingRoute);
exports.default = app;
