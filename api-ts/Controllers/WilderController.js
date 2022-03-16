"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const wilder_1 = __importDefault(require("../src/models/wilder"));
function asyncHandleRequest(handler) {
    return function (req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield handler(req, res, next);
            }
            catch (error) {
                next(error);
            }
        });
    };
}
;
class WilderController {
    constructor() {
        this.create = asyncHandleRequest((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                wilder_1.default.init();
                const wilder = new wilder_1.default(req.body);
                const createdWilder = yield wilder.save();
                res.json(createdWilder);
            }
            catch (error) {
                if (error.code === 11000) {
                    res.status(400).json({ message: 'Is already taken' });
                }
                throw error;
            }
        }));
        this.retrieve = asyncHandleRequest((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const allWilders = yield wilder_1.default.find();
            res.json(allWilders);
        }));
        this.retrieveOne = asyncHandleRequest((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const oneWilder = yield wilder_1.default.findById(req.params['id']);
            res.json(oneWilder);
        }));
        this.remove = asyncHandleRequest((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const wilder = yield wilder_1.default.findByIdAndDelete(req.params['id']);
            res.json(wilder);
        }));
        this.update = asyncHandleRequest((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const updatedWilder = yield wilder_1.default.findByIdAndUpdate(req.params['id'], req.body);
            res.json(updatedWilder);
        }));
    }
}
exports.default = WilderController;
;
