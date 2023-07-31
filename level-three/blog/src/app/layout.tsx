import React from "react";
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';

import '@/styles/globals.css';
import '@/styles/editor.css';
import { Navbar, Providers } from "@/components";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/Toaster";

const fontInter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});
const fontHeading = Plus_Jakarta_Sans({
    subsets: ['latin'],
    variable: '--font-heading',
});

export const metadata = {
    title: 'Aeon',
    description: 'A blog created with Next.js and Tailwind.css',
    icons: {
        icon: [
            '/public/icon.svg',
            '/public/logo.svg'
        ]
    }
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={cn(
                'min-h-screen h-full bg-white font-inter antialiased',
                fontInter.variable,
                fontHeading.variable
            )}>
                <Providers>
                    <Toaster />
                    <Navbar />
                    {children}
                </Providers>
            </body>
        </html>
    )
}