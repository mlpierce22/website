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
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <title>Welcome to my site! 👋</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <meta name="description" content="Mason Pierce's personal portfolio website containing projects, and experience" />
      </head>
      <body suppressHydrationWarning>

        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_ANALYTICS_ID}');
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