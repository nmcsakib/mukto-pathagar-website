import { useCallback, useEffect, useState } from 'react';

const useResponsiveSize = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const setSizes = useCallback(() => {
    setWidth(window.innerWidth - 10);
    setHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', setSizes);
    setSizes();
    return () => window.removeEventListener('resize', setSizes);
  }, [setSizes]);

  return { width, height };
};

export default useResponsiveSize;
