import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/*<motion.div*/}
          {/*  variants={fadeIn("right", 0.3)}*/}
          {/*  initial="hidden"*/}
          {/*  whileInView="show"*/}
          {/*  viewport={{ once: false, amount: 0.3 }}*/}
          {/*  className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"*/}
          {/*></motion.div>*/}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">
              I&apos;m a Backend Developer in startup, Student of the Department
              of Systems Engineering, RTU MIREA.
              <br /> Moscow, Russia.
            </h3>
            <p className="mb-6">
              My Stack:
              <li>TypeScript/JavaScript (Express, Prisma ORM, Sequelize)</li>
              <li>React + Redux Toolkit</li>
              <li>Java (Spring Boot, Spring JPA, Hibernate, JavaFX)</li>
              <li>Python (Peewee, Flask, Bot API&apos;s)</li>
              <li>PostgreSQL, MySQL, MongoDB, Redis</li>
              <li>GraphQL</li>
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  7
                </div>
                <div className="font-primary text-sm tracking=[2px]">
                  Completed
                  <br />
                  Projects
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  2
                </div>
                <div className="font-primary text-sm tracking=[2px]">
                  Hackatons
                  <br />
                  Wins
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  1M+
                </div>
                <div className="font-primary text-sm tracking=[2px]">
                  Lines
                  <br />
                  Of Code
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
