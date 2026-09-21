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
      <div className="container-editorial pt-2 sm:pt-3">
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
            <h2 className="mt-5 font-curve-retro text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.03] tracking-[0.04em] text-[#7FDFFF]">
              Selected Works
            </h2>
            <h2 className="mt-4 font-boldfat text-[clamp(2.5rem,4vw,4.5rem)] leading-[1.03] text-white dark:text-white">
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
      </div>

      <div>
        {projects.map((project, i) => {
          const Mockup = mockups[i];
          const Detail = details[project.slug];
          return (
            <ProjectRow
              key={project.slug}
              // alternate sides by position: image left, image right, image left, ...
              project={{ ...project, imageSide: i % 2 === 0 ? "left" : "right" }}
              mockup={<Mockup />}
              detail={Detail ? <Detail /> : undefined}
            />
          );
        })}
      </div>

      <div className="container-editorial pb-0">
        <p className="pt-4 text-center text-[11px] font-medium tracking-[0.28em] uppercase text-[#AEBEDE] dark:text-[#AEBEDE]">
          More projects coming soon.
        </p>
      </div>
    </section>
  );
}