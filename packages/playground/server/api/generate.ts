import { buildSVG } from '@nouns/sdk';
import { images, palette } from '~/assets/scripts/image-data.json';


const { bodies, tailgrip, wearables, eyes, extra } = images;

interface ImageData {
  filename: string,
  data: string
}
const getData = (list: ImageData[], index: number): ImageData => {
  const empty = extra[0]

  if (index == 0)
    return empty

  return list[index - 1] ?? empty
}

export default defineEventHandler(async event => {
  const readData = (await readBody(event))
  const { body, wear, eye, tail, drawPixel } = readData

  const RLE_PARTS = [
    bodies[body],
    getData(wearables, wear),
    getData(eyes, eye),
    getData(tailgrip, tail),
  ]

  const svg = buildSVG(RLE_PARTS, palette, "C1A2EB", drawPixel);

  return {
    svg
  }
})