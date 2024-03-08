import { PngImage } from '@nouns/sdk';
/**
 * Read a PNG image file and return a `PngImage` object.
 * @param path The path to the PNG file
 */
export declare const readPngImage: (path: string) => Promise<PngImage>;
