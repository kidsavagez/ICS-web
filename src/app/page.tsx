import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { TrustedBy } from "@/components/trusted-by";
import { Process } from "@/components/process";
import { Testimonial } from "@/components/testimonial";
import { FinalCTA } from "@/components/final-cta";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustedBy />
        <Process />
        <Testimonial />
        <FinalCTA />
      </main>
    </>
  );
}
