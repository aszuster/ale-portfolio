import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas-neue",
});

export default function Home() {
  return (
    <div className={`relative w-full min-h-screen ${bebasNeue.variable}`} suppressHydrationWarning>
      <Hero />
      <About />
      <Stack />
      <Projects />
    </div>
  );
}
