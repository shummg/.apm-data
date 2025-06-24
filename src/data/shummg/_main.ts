import BrightnessColorizing from "./BrightnessColorizing";
import BufferMask from "./BufferMask";
import DateCounter from "./DateCounter";
import DisplaySize from "./DisplaySize";
import MathTrack from "./MathTrack";
import MosaicAndNoise from "./MosaicAndNoise";

// Deprecated
import Dust from "./deprecated/Dust";

export const PackageData: apm.PackagesV3 = {
    version: 3,
    packages: [BrightnessColorizing, BufferMask, DateCounter, DisplaySize, Dust, MathTrack, MosaicAndNoise],
};
