import React, {useState} from 'react';
import {FractalCanvas} from "../FractalCanvas";
import {LSystemInitOptions} from "../../utils/L-system.ts";
import {LSystemOptionSelect} from "../LSystemOptionSelect";
import {Flex} from "antd";
import {lSystemOptionsPresets} from "../LSystemOptionSelect/presets.ts";

export const App: React.FC = () => {
    const [currentLSystemOptions, setCurrentLSystemOptions] =
        useState<LSystemInitOptions>(lSystemOptionsPresets.kochSnowflake);

    return (
        <Flex
            justify={'space-around'}
            align={'flex-start'}
        >
            <LSystemOptionSelect onChange={setCurrentLSystemOptions}/>
            <FractalCanvas lSystemOptions={currentLSystemOptions}/>
        </Flex>
    );
};
