import { PNGCollectionEncoder } from '@nouns/sdk';
import { PngImage } from '@nouns/sdk';
import { promises as fs } from 'fs';
import { PNG } from 'pngjs';

import path from 'path';

const DESTINATION = path.join(process.cwd(), 'assets/scripts', 'image-data.json');

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Read a PNG image file and return a `PngImage` object.
 * @param path The path to the PNG file
 */
const readPngImage = async (path: string): Promise<PngImage> => {
  const buffer = await fs.readFile(path);
  try {
    const png = PNG.sync.read(buffer);

    if (path.includes("Zombie") || path.includes("Frog")) {
      console.log("Path encode", path)
    }

    return {
      width: png.width,
      height: png.height,
      rgbaAt: (x: number, y: number) => {
        const idx = (png.width * y + x) << 2;
        const [r, g, b, a] = [png.data[idx], png.data[idx + 1], png.data[idx + 2], png.data[idx + 3]];
        return {
          r,
          g,
          b,
          a,
        };
      },
    }

  } catch (err) {
    return {
      width: 32,
      height: 32,
      rgbaAt: (x: number, y: number) => {
        return {
          r: 0,
          g: 0,
          b: 0,
          a: 0,
        };
      },
    }
  };
}


const encode = async () => {
  const encoder = new PNGCollectionEncoder();
  const rootFolder = path.join(process.cwd(), 'assets/images')
  const folders = ['bodies', 'eyes', 'wearables', 'tailgrip'];

  const file = path.join(rootFolder, 'empty.png')
  const emptyImage = await readPngImage(file);
  encoder.encodeImage("empty", emptyImage, "extra");

  for (const folder of folders) {

    const folderpath = path.join(rootFolder, folder)
    const files = await fs.readdir(folderpath);

    for (const file of files) {
      if (file.match(/\.png$/)) {
        const image = await readPngImage(path.join(folderpath, file));
        encoder.encodeImage(file.replace(/\.png$/, ''), image, folder);
      }
    }
  }

  await encoder.writeToFile(DESTINATION);
};

export default defineEventHandler(async event => {
  try {
    await encode();

    return {
      success: true
    }
  } catch (err) {
    return {
      success: false,
      error: err
    }
  }
})

