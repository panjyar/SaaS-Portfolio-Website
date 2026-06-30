import Header from "@/components/Header";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import ContentWrapper from "@/components/ContentWrapper";
import "./globals.css";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});
export const metadata: Metadata = {
  title: "Livnsense GreenOps Pvt Ltd",
  description: "Real-Time EHS Risk Intelligence — Powered by VICAS",
  icons: {
     icon: "https://vicasinfo.livnsense.com/media/images/LivNSenseLogo.svg",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={geist.variable}>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <ContentWrapper>
            {children}
            <Footer />
          </ContentWrapper>
        </ThemeProvider> 
      </body>
    </html>
  );
}
