import cliProgress from "cli-progress";
import { performance } from "perf_hooks";
import { looksSameAsync } from "./looksSaming.js";
import { nativeImageDiffering } from "./nativeImageDiffering.js";

const image1 = "../images/baseline.bing.png";
const image2 = "../images/latest.bing.png";

const looksSameOptions = {
    shouldCluster: true,
    clustersSize: 10
};

const totalRounds = 10;
const progress = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

const testing = async () => {
    const startTime = performance.now();
    progress.start(totalRounds, 0);

    for(let i=1; i<totalRounds; i++) {
        // await looksSameAsync(image1, image2, looksSameOptions);
        nativeImageDiffering(image1, image2);
        progress.update(i+1);
    }

    progress.stop();
    const endTime = performance.now();
    const duration = (endTime - startTime) / 1000;

    console.log(`completed in ${duration}s`);
};

testing();