import Header from "@/components/Header";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import ContentWrapper from "@/components/ContentWrapper";
import "./globals.css";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
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
    <html lang="en" suppressHydrationWarning className={poppins.variable}>
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
