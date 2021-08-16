import looksSame from "looks-same";

export const looksSameAsync = (image1, image2, options) => {
    return new Promise(resolve => {
        looksSame(image1, image2, options, (error, result) => {
            resolve(result);
        });
    });
};