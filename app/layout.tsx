import type { Metadata } from "next";
import { Inter, Noto_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-inter",
});
const noto = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto",
  preload: true,
});

export const metadata: Metadata = {
  title: "EcoDrive Colombia",
  description: "Blog about hybrid vehicles in Colombia",
  icons: {
    // You can replace this with a file-based icon via app/icon.png or app/favicon.ico
    icon: "data:image/x-icon;base64,",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${noto.variable} antialiased`}>
        <div
          className={`relative flex min-h-screen w-full flex-col bg-[#f8fcf8] overflow-x-hidden ${inter.variable} ${noto.variable}`}
          style={{
            fontFamily: "var(--font-inter), var(--font-noto), sans-serif",
          }}
        >
          <div className="layout-container flex h-full grow flex-col">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
