import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../../styles/style.scss";
import Contact from "@/components/Contact";

export const metadata = {
  title: "The Redeemed Christian Church Of God | Concord Church",
  description: "RCCG-Wayforward Church Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/logo.svg"></link>
        <meta name="theme-color" content="#F2F5F8" />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      </head>
      <body suppressHydrationWarning>
        {typeof window === undefined ? null : (
          <>
            <Header />
            {children}
            <Contact />
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
