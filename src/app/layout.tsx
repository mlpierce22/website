import Providers from "./providers";
import React from 'react';
import { VStack, ColorModeScript } from '@chakra-ui/react'
import theme from './theme';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import "./globals.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <title>Welcome to my site! 👋</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body suppressHydrationWarning>

        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.ANALYTICS_ID}');
          `}
        </Script>
        { }
        <Providers>
          <Navbar />
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <VStack w={"100%"} h={"100%"}>
            {children}
          </VStack>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout;