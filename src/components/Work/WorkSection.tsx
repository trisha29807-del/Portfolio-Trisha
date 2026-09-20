import { motion } from "framer-motion";
import type { ComponentType } from "react";
import { projects } from "@/data/projects";
import { ProjectRow } from "./ProjectRow";
import { FakeNewsMockup } from "./mockups/FakeNewsMockup";
import { DelhiMockup } from "./mockups/DelhiMockup";
import { FoodBridgeMockup } from "./mockups/FoodBridgeMockup";
import { FakeNewsDetail } from "./details/FakeNewsDetail";
import { FoodBridgeDetail } from "./details/foodbridge/FoodBridgeDetail";
import { DelhiHeritageDetail } from "./details/delhi-heritage-explorer/DelhiHeritageDetail";

const mockups = [FakeNewsMockup, DelhiMockup, FoodBridgeMockup];

// Detailed case studies are available for the completed projects.
const details: Record<string, ComponentType> = {
  "fake-news-detection": FakeNewsDetail,
  foodbridge: FoodBridgeDetail,
  "delhi-heritage-explorer": DelhiHeritageDetail,
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.65, 0, 0.35, 1] as const },
  }),
};

export function WorkSection() {
  return (
    <section
      id="work"
      className="bg-[#050D32] text-white transition-colors duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] dark:bg-[#050D32] dark:text-white"
    >
      <div className="container-editorial pt-8 sm:pt-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-15% 0px" }}
            variants={fadeUp}
          >
            <span className="text-[11px] font-semibold tracking-[0.28em] uppercase text-[#B9B7FF] dark:text-[#B9B7FF]">
              02
            </span>
            <h2 className="mt-5 font-mager text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.03] tracking-[0.04em] text-[#B9B7FF] dark:text-[#B9B7FF]">
              Selected Works
            </h2>
            <h2 className="mt-4 font-mager text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.03] text-[#B9B7FF] dark:text-[#B9B7FF]">
              A collection of ideas,{" "}
              <em className="font-seasons italic text-[#B9B7FF] dark:text-[#B9B7FF]">
                products and experiments
              </em>{" "}
              I&rsquo;ve built.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            custom={0.15}
            viewport={{ once: true, margin: "-15% 0px" }}
            variants={fadeUp}
            className="flex items-end"
          >
            <p className="text-[15px] leading-relaxed text-[#AEBEDE] dark:text-[#AEBEDE] lg:text-right">
              Each project represents a unique problem, an obsession with the
              details, and a relentless drive to build meaningful solutions.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          custom={0.25}
          viewport={{ once: true, margin: "-15% 0px" }}
          variants={fadeUp}
          className="mt-8 flex items-center gap-3 sm:mt-6"
        >
          <div className="h-px flex-1 bg-day-border dark:bg-night-border" />
          <span className="h-1.5 w-1.5 rotate-45 bg-[#7FDFFF]/70 dark:bg-[#7FDFFF]/70" />
        </motion.div>
      </div>

      <div>
        {projects.map((project, i) => {
          const Mockup = mockups[i];
          const Detail = details[project.slug];
          return (
            <ProjectRow
              key={project.slug}
              project={project}
              mockup={<Mockup />}
              detail={Detail ? <Detail /> : undefined}
            />
          );
        })}
      </div>

      <div className="container-editorial pb-0">
        <div className="flex items-center gap-3 pt-4">
          <div className="h-px flex-1 bg-day-border dark:bg-night-border" />
          <span className="h-1.5 w-1.5 rotate-45 bg-[#7FDFFF]/70 dark:bg-[#7FDFFF]/70" />
          <div className="h-px flex-1 bg-day-border dark:bg-night-border" />
        </div>
        <p className="mt-8 text-center text-[11px] font-medium tracking-[0.28em] uppercase text-[#AEBEDE] dark:text-[#AEBEDE]">
          More projects coming soon.
        </p>
      </div>
    </section>
  );
}
