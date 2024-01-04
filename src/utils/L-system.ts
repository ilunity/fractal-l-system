import {CanvasManager, StackItem} from "./CanvasManager.ts";

type RuleChar = 'F' | 'X' | 'Y' | 'b' | '[' | ']' | '+' | '-';

export interface LSystemInitOptions {
    S: RuleChar[];
    F: RuleChar[];
    X: RuleChar[];
    Y: RuleChar[];
    alpha: number;
    stepLength: number;
    initX: number;
    initY: number;
}

export class LSystem {
    private options: LSystemInitOptions;
    private canvasManager: CanvasManager;

    // eslint-disable-next-line @typescript-eslint/ban-types
    RULES_FUNCTIONS: Record<RuleChar, Function> = {
        'F': this.paintLine,
        'b': this.move,
        '+': this.rotate,
        '-': () => this.rotate(false),
        '[': this.memorize,
        ']': this.remember,
        'X': () => {
        },
        'Y': () => {
        },
    }

    constructor(canvasManager: CanvasManager, initOptions: LSystemInitOptions) {
        this.canvasManager = canvasManager;
        this.options = initOptions;
    }

    paintLine() {
        this.canvasManager.step(this.options.stepLength, true);
    }

    move() {
        this.canvasManager.step(this.options.stepLength);
    }

    rotate(clockwise = true) {
        let degree = this.options.alpha;

        if (!clockwise) {
            degree *= -1;
        }

        this.canvasManager.rotate(degree);
    }

    memorize() {
        this.canvasManager.memorize();
    }

    remember() {
        const {x, y, angle} = this.canvasManager.popStackItem() as StackItem;
        this.canvasManager.set(x, y);
        this.canvasManager.angle = angle;
    }

    clear() {
        this.canvasManager.clear();

        const {initX, initY} = this.options;
        this.canvasManager.set(initX, initY);
    }

    draw() {
        this.clear();
        this.canvasManager.angle = 0;
        const rules = this.options.S;

        for (const rule of rules) {
            this.RULES_FUNCTIONS[rule].apply(this);
        }
    }

    nextIteration() {
        const newRules: RuleChar[] = [];

        // this.canvasManager.set()

        for (const rule of this.options.S) {
            if (rule == 'F') {
                newRules.push(...this.options.F);
                continue;
            }

            if (rule == 'X') {
                newRules.push(...this.options.X);
                continue;
            }

            if (rule == 'Y') {
                newRules.push(...this.options.Y);
                continue;
            }

            newRules.push(rule);
        }

        this.options.S = newRules;
    }
}
