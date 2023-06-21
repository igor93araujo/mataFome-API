"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.App = void 0;
const express_1 = __importDefault(require("express"));
const cors = require('cors');
const routes_1 = __importDefault(require("./routes"));
class App {
    constructor() {
        this.cors = () => {
            this.app.use(cors({
                origin: '*'
            }));
        };
        this.app = (0, express_1.default)();
        this.routes();
    }
    start(PORT) {
        this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
    }
    routes() {
        this.cors();
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(routes_1.default);
    }
}
exports.App = App;
exports.app = new App().app;
//# sourceMappingURL=app.js.map