import { Providers } from "./providers";
import React from 'react';
import { ColorModeScript } from '@chakra-ui/react'
import { theme } from './theme';


export default function RootLayout({ children }: { children: any }) {

  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <title>Welcome to my site!👋</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}