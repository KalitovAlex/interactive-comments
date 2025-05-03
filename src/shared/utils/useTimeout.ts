import { useEffect, useRef } from 'react';

export const useTimeout = (callback: () => void, condition: boolean = true) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!condition) return;

    const timeout = setTimeout(() => {
      callbackRef.current();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [condition]);
};
