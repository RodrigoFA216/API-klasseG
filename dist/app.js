"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //me traigo express
const morgan_1 = __importDefault(require("morgan")); //morgan es para ver las peticiones en rt
const cors_1 = __importDefault(require("cors")); //este es para interconectar servidores
const config_1 = __importDefault(require("./config"));
const class_routes_1 = __importDefault(require("./routes/class.routes"));
const app = (0, express_1.default)(); //la declaro como función
app.set('port', config_1.default.PORT || 3000);
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(class_routes_1.default);
exports.default = app;
