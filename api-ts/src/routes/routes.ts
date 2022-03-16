import express from 'express';
import { WController } from "../../Controllers/WilderController";
import { ImgController } from "../../Controllers/ImageController";

const router = express.Router();
const WilderController = new WController();
const ImageController = new ImgController();

//Routes
router.post("/api/wilders", WilderController.create);
router.get("/api/wilders", WilderController.retrieve);
router.get("/api/wilders/:id", WilderController.retrieveOne);
router.delete('/api/wilders/:id', WilderController.remove);
router.patch('/api/wilders/:id', WilderController.update);

router.post("/api/images", ImageController.create);
router.get("/api/images", ImageController.retrieve);

export { router as toDoRouter }
