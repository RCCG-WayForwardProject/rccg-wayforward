import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../../styles/style.scss";

export const metadata = {
  title:
    "Wayforward Cathedral | Spirit-Filled Worship & Biblical Teachings in North Carolina",
  description:
    "Wayforward Cathedral, led by Pastor Peter Adamson, is a dynamic Christian church in Concord, North Carolina, dedicated to spreading the Gospel, fostering spiritual growth, and building a strong faith-based community through worship, prayer, and outreach programs.",
  keywords:
    "Wayforward Cathedral, Reedemed Christian Church Of God, RCCG, Christian church in North Carolina, churches in Concord NC, Pastor Peter Adamson, faith-based community, Bible teachings, worship services, Sunday service Concord NC, online church sermons, Christian fellowship, church events, spiritual growth, live church streaming",
  author: "Wayforward Cathedral",
  ogTitle:
    "Wayforward Cathedral | Experience Faith, Worship, and Community in North Carolina",
  ogDescription:
    "Join Wayforward Cathedral in Concord, NC, for inspiring worship, powerful biblical teachings, and a welcoming Christian community. Led by Pastor Peter Adamson, we offer Sunday services, Bible study, and online sermons for spiritual growth.",
  ogType: "website",
  ogUrl: "https://www.wayforwardcathedral.org",
  ogImage: "/images/og_image.png",
  twitterTitle: "Wayforward Cathedral | Worship & Fellowship in North Carolina",
  twitterDescription:
    "A vibrant Christian church in Concord, NC, where faith comes alive through worship, teachings, and fellowship. Led by Pastor Peter Adamson.",
  twitterCard: "summary_large_image",
  twitterImage: "/images/og_image.png",
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
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      </head>
      <body suppressHydrationWarning>
        {typeof window === undefined ? null : (
          <>
            <Header />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
