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
      <div className="flex flex-col items-start justify-start z-20 max-w-[1400px]">
        <h3 className="font-bebas-neue text-accent text-[64px] leading-[68px] mb-[40px]">Here are some projects i worked in</h3>
        <div className="flex flex-col gap-[30px]">
            <p className="font-bebas-neue text-secondary text-[96px] leading-[96px] border-b border-foreground">Trip Promoter <span className="font-bebas-neue text-foreground text-[48px] leading-[48px]">(leading dev team and in charge of animations)</span></p>
            <p className="font-bebas-neue text-secondary text-[96px] leading-[96px] border-b border-foreground">Lítica <span className="font-bebas-neue text-foreground text-[48px] leading-[48px]">(Worked with a team doing Front End Development and animations)</span></p>
            <p className="font-bebas-neue text-secondary text-[96px] leading-[96px] border-b border-foreground">GMA <span className="font-bebas-neue text-foreground text-[48px] leading-[48px]">(Worked with a team doing Front End Development and animations)</span></p>
            <p className="font-bebas-neue text-secondary text-[96px] leading-[96px] border-b border-foreground">Personal Project <span className="font-bebas-neue text-foreground text-[48px] leading-[48px]"> (Solo project made by myself)</span></p>
            <p className="font-bebas-neue text-secondary text-[96px] leading-[96px] ">Animations study <span className="font-bebas-neue text-foreground text-[48px] leading-[48px]"> (Soon)</span></p>
        </div>
      </div>
    </section>
  );
}
