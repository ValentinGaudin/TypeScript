
import mongoose from "mongoose";
import cors from "cors";
import express, { Request, Response, NextFunction, json, urlencoded } from 'express';
import { wilderRouter } from './routes/wilderRoutes';
import { imageRouter } from './routes/imageRoutes';

const app = express();

async function init(): Promise<void> {
    console.log('Wait connection');
    await mongoose.connect("mongodb://127.0.0.1:27017/wilderdb", {
        autoIndex: true,
    });

    //Middleware
    app.use(express.static(__dirname + '/public'));
    app.use(urlencoded({ extended: true }));
    app.use(json());
    app.use(cors());
    app.use("/api/wilders", wilderRouter);
    app.use("/api/images", imageRouter);

    console.log("hello");

    //HTTP 500 Error
    app.use((err: any, req: Request, res: Response, next: NextFunction) => {
        console.log(err);
        res.status(500).json({ message: 'An internal error occured' });
    });

    //HTTP 404 Error
    app.use((req: Request, res: Response, next: NextFunction) => {
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
