import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.jpg";
import Img3 from "../assets/portfolio-img3.png";
const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/*  text  */}
            <div className="flex-1">
              <h2 className="h2 leading-tight text-accent">
                My Best <br />
                Projects.
              </h2>
              <p className="max-w-sm mb-16"></p>
              <button
                className="btn btn-sm"
                onClick={() => window.open("https://github.com/lalkalol1907")}
              >
                View all projects
              </button>
            </div>
            {/*  image  */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="bg-black/10 group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-60 transition-all suration-700 z-50">
                <span className="text-3xl text-white">
                  Email Messenger (In develop)
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-32 transition-all suration-500 z-50">
                <span className="text-gradient">
                  Creator
                  <br />
                  UI/UX Designer
                  <br />
                  Developer
                </span>
              </div>
              <p className="absolute -bottom-full left-12 group-hover:bottom-8 transition-all suration-700 z-50">
                Email client that presents messages like chats in a messenger
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            {/* image */}
            <div
              className="group relative overflow-hidden border-2 border-white/50 rounded-xl"
              onClick={() =>
                window.open("https://github.com/lalkalol1907/MujahidV2")
              }
            >
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-60 transition-all suration-700 z-50">
                <span className="text-3xl text-white">
                  Mujahid Music Bot V2
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-36 transition-all suration-500 z-50">
                <span className="text-gradient">
                  Creator
                  <br />
                  Developer
                </span>
              </div>
              <p className="absolute -bottom-full left-12 group-hover:bottom-8 transition-all suration-700 z-50">
                Discord bot for listening to music on the server, written in TS
              </p>
            </div>

            <div
              className="group relative overflow-hidden border-2 border-white/50 rounded-xl"
              onClick={() =>
                window.open("https://github.com/Crafty-Coders/SchoolChat")
              }
            >
              <div className="bg-black/10 group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-60 transition-all suration-700 z-50">
                <span className="text-3xl text-white">School Chat</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-32 transition-all suration-500 z-50">
                <span className="text-gradient">
                  Team Lead
                  <br />
                  Backend Developer
                  <br />
                  IOS Developer
                </span>
              </div>
              <p className="absolute -bottom-full left-12 group-hover:bottom-8 transition-all suration-700 z-50">
                Messenger created during the quarantine for integration into the
                electronic education system
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
