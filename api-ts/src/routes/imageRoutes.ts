import multer from "multer";
import express from 'express';
import { Request, Response, NextFunction, RequestHandler } from "express";
import { ImgController } from "../../Controllers/ImageController";

const uniq = 'id' + (new Date()).getTime();
const ImageController = new ImgController();
const router = express.Router();

const filestorage = multer.diskStorage({
    destination: (req : Request, file, cb) => {
        cb(null, process.cwd() + '/images')
    },
    filename: (req: Request, file, cb) => {
        if (file.mimetype.includes('image')) {
            const fileType = file.mimetype.slice(6);
            cb(null, `${uniq}.${fileType}`)
        }
    }
})
const upload = multer({ storage: filestorage })

router.post("", upload.single('avatar'), ImageController.create);
router.get("/:id", ImageController.retrieveOne);

export { router as imageRouter }
