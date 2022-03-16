"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDoRouter = void 0;
const express_1 = __importDefault(require("express"));
const WilderController_1 = __importDefault(require("../../Controllers/WilderController"));
const router = express_1.default.Router();
exports.toDoRouter = router;
const WilderController = new WilderController_1.default;
//Routes
router.post("/api/wilders", WilderController.create);
router.get("/api/wilders", WilderController.retrieve);
router.get("/api/wilders/:id", WilderController.retrieveOne);
router.delete('/api/wilders/:id', WilderController.remove);
router.patch('/api/wilders/:id', WilderController.update);
