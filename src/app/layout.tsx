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
      <head>
        <link rel="icon" type="image/png" href="/logo.svg"></link>
      </head>
      <body suppressHydrationWarning>
        {typeof window === undefined ? null : (
          <>
            <Header />
            {children}
          </>
        )}
      </body>
    </html>
  );
}
