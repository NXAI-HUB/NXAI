declare module 'next/link' {
  import { LinkProps as NextLinkProps } from 'next/dist/client/link';
  import * as React from 'react';

  type LinkProps = NextLinkProps & {
    children?: React.ReactNode;
    className?: string;
    [key: string]: any;
  };

  export default function Link(props: LinkProps): JSX.Element;
} 