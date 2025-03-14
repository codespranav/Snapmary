import type { Metadata } from "next";
import { Source_Sans_3 as FontSans} from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200","300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Snapmarry - AI Powered PDF Summarizer",
  description: "Snapmarry- Best tool to convert pdf into summaries. Save hours of reading time. Transform your lengthy pdf into summaries within seconds with our advanced AI summarizer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} font-sans  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
