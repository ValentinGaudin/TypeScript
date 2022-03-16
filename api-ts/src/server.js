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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose = require("mongoose");
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes/routes");
const app = (0, express_1.default)();
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Wait connection');
        yield mongoose.connect("mongodb://127.0.0.1:27017/wilderdb", {
            autoIndex: true,
        });
        //Middleware
        app.use(express_1.default.urlencoded({ extended: true }));
        app.use(express_1.default.json());
        app.use((0, cors_1.default)());
        app.use(routes_1.toDoRouter);
        //HTTP 500 Error
        app.use((err, req, res, next) => {
            res.status(500).json({ message: 'An internal error occured' });
        });
        //HTTP 404 Error
        app.use((req, res, next) => {
            res.status(404).json({ message: 'Not found' });
        });
        //Start Server
        app.listen(4000, () => console.log("Server started on 4000"));
        console.log('Connection is ok');
    });
}
;
init();
// gestion des erreurs 
// npm i express-async-handler
// https://zellwk.com/blog/express-errors/
