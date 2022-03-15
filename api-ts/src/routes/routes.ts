    import express from 'express';
    import WildersController from "../../Controllers/WilderController";

    const router = express.Router();
    const WilderController = new WildersController;

    //Routes
    router.post("/api/wilders", WilderController.create);
    router.get("/api/wilders", WilderController.retrieve);
    router.get("/api/wilders/:id", WilderController.retrieveOne);
    router.delete('/api/wilders/:id', WilderController.remove);
    router.patch('/api/wilders/:id', WilderController.update);

    export { router as toDoRouter }
