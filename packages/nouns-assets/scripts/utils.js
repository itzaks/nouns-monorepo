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
Object.defineProperty(exports, "__esModule", { value: true });
exports.readPngImage = void 0;
const fs_1 = require("fs");
const pngjs_1 = require("pngjs");
/**
 * Read a PNG image file and return a `PngImage` object.
 * @param path The path to the PNG file
 */
const readPngImage = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const buffer = yield fs_1.promises.readFile(path);
    const png = pngjs_1.PNG.sync.read(buffer);
    return {
        width: png.width,
        height: png.height,
        rgbaAt: (x, y) => {
            const idx = (png.width * y + x) << 2;
            const [r, g, b, a] = [png.data[idx], png.data[idx + 1], png.data[idx + 2], png.data[idx + 3]];
            return {
                r,
                g,
                b,
                a,
            };
        },
    };
});
exports.readPngImage = readPngImage;
