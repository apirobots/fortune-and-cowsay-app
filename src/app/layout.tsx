import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Fortune + Cowsay Quote Generator",
    description: "A simple app that generates a fortune quote with cowsay.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <header className="bg-blue-600 text-white py-4">
            <div className="container mx-auto text-center">
                <h1 className="text-2xl font-bold">Fortune + Cowsay Quote Generator</h1>
                <p className="text-sm mt-2 m-2">
                    Fortune is a simple program that displays a random message from a database of quotations. It was
                    originally written by Ken Arnold in the 1970s. Cowsay is a program that generates an ASCII picture
                    of a cow with a message, created by Tony Monroe in 1999.
                </p>
            </div>
        </header>
        {children}
        <Footer/>
        </body>
        </html>
    );
}