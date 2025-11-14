import React from 'react';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Footer, Header } from '@/components';
import { theme } from '../theme';

import '/styles/global.css';
import '@mantine/carousel/styles.css';
import '@gfazioli/mantine-marquee/styles.css';
import '@gfazioli/mantine-marquee/styles.layer.css';
import '@mantine/notifications/styles.css';
import '@mantine/core/styles.css';
import '@mantine/dropzone/styles.css';

import { Notifications } from '@mantine/notifications';
import { Providers } from './Providers';

export const metadata = {
  title: 'Home | CollegeLe',
  description: 'One stop destination to discover your college',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/assets/brand__icon.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8SSX13J1CD" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-8SSX13J1CD');
  `,
          }}
        />
      </head>
      <body>
        <Providers>
          <MantineProvider theme={theme}>
            <Notifications />
            <Header />
            {children}
            <Footer />
          </MantineProvider>
        </Providers>
      </body>
    </html>
  );
}
