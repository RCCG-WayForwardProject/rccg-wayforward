import Header from "@/components/Header";
import "../../styles/style.scss";

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
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
