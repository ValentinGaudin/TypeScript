import express from 'express';
import { WController } from "../../Controllers/WilderController";

const router = express.Router();
const WilderController = new WController();

//Routes
router.post("/", WilderController.create);
router.get("/", WilderController.retrieve);
router.get("/:id", WilderController.retrieveOne);
router.delete('/:id', WilderController.remove);
router.patch('/:id', WilderController.update);

export { router as wilderRouter }
