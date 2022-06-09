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
exports.updateClass = exports.deleteClass = exports.findClass = exports.getClass = exports.createClass = void 0;
const Class_1 = __importDefault(require("./Class"));
const createClass = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const claseEncontrada = yield Class_1.default.findOne({ url: req.body.url });
    if (claseEncontrada) {
        return res.status(301).json({ message: 'La url ya existe, verifica tus clases' });
    }
    const clase = new Class_1.default(req.body);
    const savedClase = yield clase.save();
    res.json(savedClase);
});
exports.createClass = createClass;
const getClass = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clases = yield Class_1.default.find();
        return res.json(clases);
    }
    catch (error) {
        res.json(error);
    }
});
exports.getClass = getClass;
const findClass = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const claseEncontrada = yield Class_1.default.findById(req.params.id);
    if (!claseEncontrada) {
        return res.status(204).json();
    }
    return res.json(claseEncontrada);
});
exports.findClass = findClass;
const deleteClass = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const claseEliminada = yield Class_1.default.findByIdAndDelete(req.params.id);
    if (!claseEliminada) {
        return res.status(204).json();
    }
    return res.json(claseEliminada);
});
exports.deleteClass = deleteClass;
const updateClass = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const claseActualizada = yield Class_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!claseActualizada) {
        return res.status(204).json();
    }
    res.json(claseActualizada);
});
exports.updateClass = updateClass;
