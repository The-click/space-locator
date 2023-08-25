import "./globals.css";
import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import { Providers } from "./providers";
import Header from "@/components/Header/Header";

const roboto = Arimo({
    weight: ["400", "500", "700"],
    subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
    title: "Space loactor",
    description: "space locator",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <Providers>
                <body className={roboto.className}>
                    <div className="wrapper">
                        <Header />
                        <main>{children}</main>
                    </div>
                </body>
            </Providers>
        </html>
    );
}
