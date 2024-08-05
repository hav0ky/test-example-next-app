import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/header";
import MaxWidth from "@/components/max-width";
import SiteFooter from "@/components/footer";

const nunito = Nunito({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['sans-serif'],
})

export const metadata: Metadata = {
  title: "TestSite",
  description: "Empowering Your Digital Future with Comprehensive IT Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={nunito.className}>
        <SiteHeader />
        <div className="">
          {children}
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
