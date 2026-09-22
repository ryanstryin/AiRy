import { Hero } from "@/components/sections/home/Hero";
import { ProblemStatement } from "@/components/sections/home/ProblemStatement";
import { ThreePaths } from "@/components/sections/shared/ThreePaths";
import { DifferentiatorTable } from "@/components/sections/home/DifferentiatorTable";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { FinalCTA } from "@/components/sections/home/FinalCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProblemStatement />
      <ThreePaths source="home" />
      <DifferentiatorTable />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}
