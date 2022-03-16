import express from "express";
import mongoose = require("mongoose");
import cors from "cors";
import { Request, Response, NextFunction } from "express";
import { toDoRouter } from './routes/routes';
import bodyParser = require("body-parser");
import multer = require("multer");

const app = express();

async function init(): Promise<void> {
    console.log('Wait connection');
    await mongoose.connect("mongodb://127.0.0.1:27017/wilderdb", {
        autoIndex: true,
    });

    //Middleware
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(cors());
    app.use(toDoRouter);

    var storage = multer.diskStorage({
        destination: (req: Request, file, cb): void => {
            cb(null, 'uploads')
        },
        filename: (req: Request, file, cb): void => {
            cb(null, file.fieldname + '-' + Date.now())
        }
    });

    var upload = multer({ storage: storage });

    // Set EJS as templating engine 
    app.set("view engine", "ejs");

    //HTTP 500 Error
    app.use((err: any, req: Request, res: Response, next: NextFunction) => {
        res.status(500).json({ message: 'An internal error occured' });
    });

    //HTTP 404 Error
    app.use((req: Request, res: Response, next: NextFunction) => {
        console.log("hello");
        res.status(404).json({ message: 'Not found' });
    });

    //Start Server
    app.listen(4000, () => console.log("Server started on 4000"));
    console.log('Connection is ok')
};
init();

// gestion des erreurs 
// npm i express-async-handler
// https://zellwk.com/blog/express-errors/
