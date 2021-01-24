"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startExpress = void 0;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var constants_1 = require("./constants");
var startExpress = function () {
    var app = express_1.default();
    app.use(cors_1.default());
    app.all('*', function (_, res) {
        return res
            .status(404)
            .json({ error: 'Page not found.' });
    });
    app.listen(constants_1.constants.port, function () {
        return console.log('Hello world');
    });
};
exports.startExpress = startExpress;
