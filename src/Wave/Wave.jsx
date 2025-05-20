import { useCanvasContext } from '../Wave/useCanvas';
import useResponsiveSize from '../Wave/useResponsiveSize';
import WaveObj from '../Wave/useWave';

const Wave = () => {
  const { context } = useCanvasContext();
  const { width } = useResponsiveSize();
  const height = 600;
  let frequency = 0.013;

  const waves = {
    frontWave: new WaveObj([0.0211, 0.028, 0.015], 'rgb(231,229,228,0.66)'),
    backWave: new WaveObj([0.0122, 0.018, 0.005], 'rgb(231,229,228, 1)'),
  };

  const render = () => {
    if (!context) return;
    context.clearRect(0, 0, width, height);
    Object.entries(waves).forEach(([, wave]) => {
      wave.draw(context, width, height, frequency);
    });
    frequency += 0.013;
    requestAnimationFrame(render);
  };

  if (context) render();

  return null;
};

export default Wave;
