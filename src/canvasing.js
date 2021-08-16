import fs from "fs";
import canvas from "canvas";

export const ignoreImage = async (imageSource, width, height, imageDestination, rects) => {
    const canvasing = canvas.createCanvas(width, height);
    const context = canvasing.getContext("2d");

    const image = await canvas.loadImage(imageSource);
    context.drawImage(image, 0, 0, width, height);

    for (const rect of rects) {
        context.fillRect(rect.x, rect.y, rect.w, rect.h);
        context.fillStyle = '#3574d4'
    }

    const buffer = canvasing.toBuffer("image/png");
    fs.writeFileSync(imageDestination, buffer);
};

const check = async () => {

    const imageSource = "../images/baseline.bing.png";
    const imageDestination = "../images/destination.img.png";

    const width = 2592;
    const height = 1078;
    const rects = [
        { x:1217, y:481, w:157, h:90 }
    ]

    await ignoreImage(imageSource, width, height, imageDestination, rects);
};

check();