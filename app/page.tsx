import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner/Banner";
import About from "@/components/About/About";
import Founder from "@/components/Founder/Founder";
import Program from "@/components/Program/Program";
import Marquee from "@/components/Marquee/Marquee";
import Faq from "@/components/Faq/Faq";

export default function Home() {
  return (
    <main>
      <Banner />
      <About />
      <Founder />
      <Program />
      <Marquee />
      <Faq />
    </main>
  );
}
