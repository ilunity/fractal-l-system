import React, {useEffect, useRef, useState} from 'react';
import {FractalCanvasProps} from './FractalCanvas.types';
import {CanvasWrapper} from "../CanvasWrapper";
import {CanvasManager} from "../../utils/CanvasManager.ts";
import {Button, Flex} from "antd";
import {LSystem} from "../../utils/L-system.ts";

const getMousePos = (canvas: HTMLCanvasElement, event: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvas.getBoundingClientRect();
    return {x: event.clientX - rect.left, y: event.clientY - rect.top};
};



export const FractalCanvas: React.FC<FractalCanvasProps> = ({lSystemOptions}) => {
    const canvasRef = useRef<HTMLCanvasElement>({} as HTMLCanvasElement);
    const [canvasManager, setCanvasManager] = useState<CanvasManager>();
    const [lSystem, setLSystem] = useState<LSystem>();

    useEffect(() => {
        const newCanvasManager = new CanvasManager(canvasRef.current)
        setCanvasManager(newCanvasManager)

        const newLSystem = new LSystem(newCanvasManager, lSystemOptions)

        setLSystem(newLSystem);
    }, [lSystemOptions]);

    const handle = () => {
        lSystem?.draw()
        lSystem?.nextIteration();
    }

    const setPoint = (event: React.MouseEvent<HTMLCanvasElement>) => {
        const {x, y} = getMousePos(canvasRef.current, event);
        canvasManager?.set(x, y)
    }

    return (
        <Flex
            vertical
            justify={'center'}
            align={'center'}
        >
            <CanvasWrapper>
                <canvas
                    ref={canvasRef}
                    width={1000}
                    height={700}
                    onClick={setPoint}
                />
            </CanvasWrapper>
            <Button
                block
                type={'primary'}
                onClick={handle}
            >
                Отрисовать
            </Button>
        </Flex>
    );
};
