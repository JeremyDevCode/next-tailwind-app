import './globals.css';

import Providers from '../components/Providers';
import NavRoutingComponent from 'components/NavRoutingComponent';
import { Roboto_Flex } from 'next/font/google';

const RobotoFlex = Roboto_Flex({
  subsets: ['latin'],
  variable: '--robotoflex-font',
  weight: ['100', '400', '500', '700', '900'],
  display: 'swap',
  preload: true,
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${RobotoFlex.variable} font-sans`}>
      <body className="flex min-h-screen flex-row">
        <Providers>
          <NavRoutingComponent></NavRoutingComponent>

          <main className="relative ps-80 flex-1">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
