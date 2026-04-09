import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ClinicaNova — Medycyna estetyczna Gdańsk",
  description:
    "Klinika medycyny estetycznej w Gdańsku. Profesjonalne zabiegi i konsultacje.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={dmSans.variable}>
      <body id="top" className="min-h-screen font-sans">
        {children}
      </body>
    </html>
  );
}
