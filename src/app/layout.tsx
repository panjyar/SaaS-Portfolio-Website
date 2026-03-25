import Header from "@/components/Header";
import type { Metadata } from "next";
import { Poppins, Geist } from "next/font/google";
import ContentWrapper from "@/components/ContentWrapper";
import "./globals.css";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400"],
});
export const metadata: Metadata = {
  title: "Livnsense",
  description: "Real-Time EHS Risk Intelligence — Powered by VICAS",
  icons: {
     icon: "images/LivNSenseLogo.svg",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <body className={`${poppins.variable} antialiased`}>
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
