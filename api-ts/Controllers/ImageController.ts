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
        const obj = {
            name: req.body.name,
            desc: req.body.desc,
            img: {
                data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file?.filename)),
                contentType: 'image/png'
            }
        }
        imgModel.create(obj, (err: any, item) => {
            if (err) {
                console.error();
            }
            else {
                // item.save();
                res.redirect('/');
            }
        });
    });
    retrieve = asyncHandleRequest(async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        imgModel.find({}, (err, items) => {
            if (err) {
                console.log(err);
            }
            else {
                res.render('imagesPage', { items: items });
            }
        })
    });
};
export { ImageController as ImgController }