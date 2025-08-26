import Footer from "@/components/footer/Footer";

import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";
import ParticleBg from "@/components/myComps/ParticleBg";
import Header from "@/components/header/Header";

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className="">
        <ThemeProvider
          attribute={"class"}
          enableSystem={false}
        >
          <Header />

          <main className="container mx-auto max-w-6xl px-6 py-3">
            {children}
          </main>
          <ParticleBg />

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
