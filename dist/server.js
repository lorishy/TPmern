"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const directorRoutes_1 = __importDefault(require("./routes/directorRoutes"));
const filmRoutes_1 = __importDefault(require("./routes/filmRoutes"));
const seanceRoutes_1 = __importDefault(require("./routes/seanceRoutes"));
const app = (0, express_1.default)();
const PORT = 3002;
app.use(express_1.default.json());
app.use('/api/directors', directorRoutes_1.default);
app.use('/api/films', filmRoutes_1.default);
app.use('/api/seances', seanceRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Le serveur écoute sur le port ${PORT}`);
});
