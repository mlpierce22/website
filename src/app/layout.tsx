import Providers from "./providers";
import React from 'react';
import { VStack } from '@chakra-ui/react'
import theme from './theme';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import { CustomColorScript } from "@/components/CustomColorScript";

const RootLayout = ({ children }: { children: any }) => {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <title>Welcome to my site! 👋</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>

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
          <CustomColorScript initialColorMode={theme.config.initialColorMode} />
          <VStack h={"100vh"} w={"100%"}>
            {children}
          </VStack>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout;