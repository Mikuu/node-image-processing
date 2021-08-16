import { looksSameAsync } from "./looksSaming.js";
import { ignoreImage } from "./canvasing.js";

const looksSameRectToCanvasRect = (looksSameRect) => {
    const { left, top, right, bottom } = looksSameRect;
    return { x: left, y: top, w: right - left, h: bottom - top }
};

const check = async () => {
    const image1 = "../images/baseline.bing.png";
    const image2 = "../images/diff.bing.png";

    const imageSource = "../images/baseline.bing.png";
    const imageSourceWidth = 2592;
    const imageSourceHeight = 1078;
    const imageDestination = "../images/destination.bing.png";

    const options = { shouldCluster: true, clustersSize: 50 };
    const { diffClusters } = await looksSameAsync(image1, image2, options);
    const canvasRects = diffClusters.map(looksSameRect => looksSameRectToCanvasRect(looksSameRect));

    await ignoreImage(imageSource, imageSourceWidth, imageSourceHeight, imageDestination, canvasRects);
};

check();