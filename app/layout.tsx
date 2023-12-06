import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import { Provider } from '@/utils/Provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Task',
  description: 'Test task',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
