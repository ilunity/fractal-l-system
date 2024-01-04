export interface StackItem {
    x: number;
    y: number;
    angle: number;
}

export class CanvasManager {
    set angle(value: number) {
        this._angle = value;
    }

    private ctx: CanvasRenderingContext2D;
    private canvas: HTMLCanvasElement;
    private x: number = 50;
    private y: number = 50;
    private _angle: number = 0;
    private stack: StackItem[] = [];

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    }

    step(length: number, paint = false) {
        const theta = this.degree2Radian(this._angle);

        if (paint) {
            this.ctx.moveTo(this.x, this.y);
        }

        this.x = this.x + length * Math.cos(theta);
        this.y = this.y + length * Math.sin(theta);

        if (paint) {
            this.ctx.lineTo(this.x, this.y);
            this.ctx.stroke();
            this.ctx.beginPath();
        }
    }

    degree2Radian(degree: number) {
        return (degree * Math.PI) / 180;
    }

    set(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    rotate(degree: number) {
        this._angle += degree;
    }

    pushStackItem(stackItem: StackItem) {
        this.stack.push(stackItem);
    }

    memorize() {
        this.pushStackItem({
            x: this.x,
            y: this.y,
            angle: this._angle,
        });
    }

    popStackItem(): StackItem | undefined {
        return this.stack.pop()
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.beginPath();
    }
}
