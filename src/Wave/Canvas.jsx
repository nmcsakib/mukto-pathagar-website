import { useRef, useEffect, useState } from 'react';

import { CanvasContext } from '../Wave/useCanvas';
import useResponsiveSize from '../Wave/useResponsiveSize';
import Wave from '../Wave/Wave';

const Canvas = () => {
  const canvasRef = useRef(null);
  const { width } = useResponsiveSize();
  const [context, setContext] = useState();

  useEffect(() => {
    const ctx = canvasRef?.current?.getContext('2d');
    if (ctx) setContext(ctx);
  }, []);

  return (
    <CanvasContext.Provider value={{ context }}>
      <canvas id="canvas" ref={canvasRef} width={width} height={220}></canvas>
      <Wave />
    </CanvasContext.Provider>
  );
};

export default Canvas;
