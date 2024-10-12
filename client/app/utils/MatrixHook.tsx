import React, { ReactNode } from 'react';
import useMatrixBackground from '../components/matrix/MatrixBgHook';

type test = {
    children:  ReactNode
}


const ComponentWithMatrixBG: React.FC<test> = ({ children }) => {
    const canvasRef = useMatrixBackground();

    return (
        <div style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Matrix background canvas */}
            <canvas
                ref={canvasRef}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -1,
                }}
            />

            {/* The component content */}
            <div style={{ position: 'relative', zIndex: 1 }}>
                {children}
            </div>
        </div>
    );
};

export default ComponentWithMatrixBG;
