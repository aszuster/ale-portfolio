import Image from "next/image";

export default function About() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center bg-[#2C1C5A]">
      <Image
        src="/img/filter-bg.png"
        alt="texture"
        fill
        className="object-cover w-full h-full z-0"
      />
      <div className="flex flex-col items-start justify-start z-20 max-w-[884px]">
        <p className="font-bebas-neue text-foreground text-[64px] leading-[68px]">I'm dedicated to create efficient and beautiful websites, I've been working as a Front End Developer for more than 5 years, Inside agencies with a team as well as a freelancer</p>
      </div>
    </section>
  );
}
