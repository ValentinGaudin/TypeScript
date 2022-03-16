import express from 'express';
import multer from "multer";
import { WController } from "../../Controllers/WilderController";
import { ImgController } from "../../Controllers/ImageController";

const router = express.Router();
const WilderController = new WController();
const ImageController = new ImgController();

var storage = multer.diskStorage({
    destination: (req: express.Request, file, cb): void => {
        cb(null, 'uploads')
    },
    filename: (req: express.Request, file, cb): void => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

var upload = multer({ storage: storage });

//Routes
router.post("/api/wilders", WilderController.create);
router.get("/api/wilders", WilderController.retrieve);
router.get("/api/wilders/:id", WilderController.retrieveOne);
router.delete('/api/wilders/:id', WilderController.remove);
router.patch('/api/wilders/:id', WilderController.update);
router.post("/api/images", upload.single('avatar'), ImageController.create);
router.get("/api/images", ImageController.retrieve);

export { router as toDoRouter }
