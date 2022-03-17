import WilderModel from "../src/models/wilder";
import imgModel from "../src/models/image";
import { Request, Response, NextFunction, RequestHandler } from "express";
import fs = require('fs');
import path = require('path');

function asyncHandleRequest(handler: Function): RequestHandler {
    return async function (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            await handler(req, res, next)
        } catch (error: any) {
            next(error)
        }
    }
};


class WilderController {
    create = asyncHandleRequest(async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        try {
            WilderModel.init();
            const wilder = new WilderModel(req.body);
            const createdWilder = await wilder.save();
            res.json(createdWilder);
        } catch (error: any) {
            if (error.code === 11000) {
                res.status(400).json({ message: 'Is already taken' });
            } throw error;
        }
    });
    retrieve = asyncHandleRequest(async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        const allWilders = await WilderModel.find().select("-__v");
        res.json(allWilders);
    });
    retrieveOne = asyncHandleRequest(async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        const oneWilder = await WilderModel.findById(req.params['id']).select("-__v");;
        res.json(oneWilder);
    });
    remove = asyncHandleRequest(async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        const wilder = await WilderModel.findByIdAndDelete(req.params['id']);
        res.json(wilder);
    });
    update = asyncHandleRequest(async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        const updatedWilder = await WilderModel.findByIdAndUpdate(req.params['id'], req.body);
        res.json(updatedWilder);
    });
};
export { WilderController as WController }