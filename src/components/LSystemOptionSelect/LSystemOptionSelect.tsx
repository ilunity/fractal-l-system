import React from 'react';
import {LSystemOptionSelectProps} from './LSystemOptionSelect.types.ts';
import {Flex, Radio, RadioChangeEvent, Space, Typography} from "antd";
import {lSystemOptionsPresets} from "./presets.ts";


export const LSystemOptionSelect: React.FC<LSystemOptionSelectProps> = ({onChange}) => {
    return (
        <Flex vertical>
            <Typography.Title
                level={2}
                style={{marginTop: 20}}
            >
                Выберите L-систему:
            </Typography.Title>
            <Radio.Group
                onChange={(e: RadioChangeEvent) => {
                    onChange(e.target.value)
                }}
                defaultValue={lSystemOptionsPresets.kochSnowflake}
            >
                <Space direction="vertical">
                    <Radio value={lSystemOptionsPresets.kochSnowflake}>Снежинка Коха</Radio>
                    <Radio value={lSystemOptionsPresets.dragonCurve}>Дракон Хартера-Хатвея</Radio>
                    <Radio value={lSystemOptionsPresets.sierpinskiTriangle}>Треугольник Серпинского</Radio>
                    <Radio value={lSystemOptionsPresets.hilbertCurve}>Кривая Гильберта</Radio>
                    <Radio value={lSystemOptionsPresets.tree1}>Дерево 1</Radio>
                    <Radio value={lSystemOptionsPresets.tree2}>Дерево 2</Radio>
                    <Radio value={lSystemOptionsPresets.tree3}>Дерево 3</Radio>
                    <Radio value={lSystemOptionsPresets.tree4}>Дерево 4</Radio>
                </Space>
            </Radio.Group>
        </Flex>
    );
};
