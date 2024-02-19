import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './style/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Portfolio',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <title>Portfolio</title>
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
