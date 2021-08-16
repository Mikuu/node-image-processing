import { diffImages } from "native-image-diff";
import { readPngFileSync, writePngFileSync } from "node-libpng";

export const nativeImageDiffering = (image1, image2) => {
    return  diffImages(readPngFileSync(image1), readPngFileSync(image2));
};