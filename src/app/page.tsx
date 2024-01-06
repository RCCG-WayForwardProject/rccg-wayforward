import Home from "@/components/Home";
import AboutUs from "@/components/About";
import Sermons from "@/components/Sermons";
import Services from "@/components/Service";
import VideoPlayer from "@/components/Video";
import Songs from "@/components/Songs";
import Testimonies from "@/components/Testimonies";
import Donation from "@/components/Donation";
import Prayer from "@/components/Prayer";
import Newsletter from "@/components/Newsletter";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

import styles from "./page.module.scss";

export default function Page() {
  return (
    <div className={styles["page"]}>
      <Home />
      <AboutUs />
      <Sermons />
      <Services />
      <VideoPlayer />
      <Songs />
      <Testimonies />
      <Donation />
      <Prayer />
      <Newsletter />
      <FAQ />
      <Contact />
    </div>
  );
}
