import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../../styles/style.scss";

export const metadata = {
  title: "rccg-wayforwardcathedral",
  description: "RCCG-Wayforward Church Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
