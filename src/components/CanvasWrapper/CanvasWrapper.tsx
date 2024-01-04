import React from 'react';
import {CanvasWrapperProps} from './CanvasWrapper.types';

export const CanvasWrapper: React.FC<CanvasWrapperProps> = ({children}) => {
    return (
        <div
            style={{
                // display: 'flex',
                // justifyContent: 'center',
                // alignItems: 'center',
                // width: 500,
                // height: 500,
                // width: 'auto',
                border: '1px dashed #d9d9d9',
                borderRadius: 8,
                backgroundColor: 'rgba(0, 0, 0, 0.02)',
            }}
        >
            {children}
        </div>
    );
};
