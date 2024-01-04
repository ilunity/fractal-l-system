import {LSystemInitOptions} from "../../utils/L-system.ts";

export enum L_SYSTEM_PRESETS_NAMES {
    KOCH_SNOWFLAKE = 'kochSnowflake',
    DRAGON_CURVE = 'dragonCurve',
    SIERPINSKI_TRIANGLE = 'sierpinskiTriangle',
    HILBERT_CURVE = 'hilbertCurve',
    TREE1 = 'tree1',
    TREE2 = 'tree2',
    TREE3 = 'tree3',
    TREE4 = 'tree4'
}

export interface LSystemOptionSelectProps {
    onChange: (options: LSystemInitOptions) => void;
}
