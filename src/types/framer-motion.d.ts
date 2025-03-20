declare module 'framer-motion' {
  import * as React from 'react';

  export interface MotionProps {
    initial?: any;
    animate?: any;
    transition?: any;
    whileHover?: any;
    whileTap?: any;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    [key: string]: any;
  }

  type Motion = {
    [K in keyof JSX.IntrinsicElements]: React.ComponentType<
      JSX.IntrinsicElements[K] & MotionProps
    >
  };

  export const motion: Motion;
} 