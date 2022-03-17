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

class ImageController {
    create = asyncHandleRequest(async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        console.log("hello world")
        if (req.file) {
            const obj = {
                name: req.body.name,
                desc: req.body.desc,
                img: {
                    data: fs.readFileSync(path.join(process.cwd(), 'images', req.file.filename)),
                    contentType: 'image/png'
                }
            }
            imgModel.create(obj, (err: any, item) => {
                if (err) {
                    console.error();
                }
                else {
                    // item.save();
                    res.json({ _id: item._id })
                }
            });
        }
    });
    retrieveOne = asyncHandleRequest(async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        const oneImage = await imgModel.findById(req.params['id']);
        res.setHeader("content-type", oneImage?.img?.contentType as string);
        res.send(oneImage?.img.data);
    });
};
export { ImageController as ImgController }