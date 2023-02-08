import React from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { bios } from "../../../Data";
import main from "../../../assets/main.jpeg";
import { Resume } from "../../../assets";

const About = () => {
  return (
    <div className="container" id="about">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>Who Am I?</span>
        <h1>About Me</h1>
      </motion.div>

      <div className="about_container">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="about_left"
        >
          <motion.img
            src={main}
            whileHover={{ y: -48, x: -55 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <motion.div
          className="about_right"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p>
            5 years of experience in developing web applications and websites
            using React/Typescript, Next.JS, Vue.js. Managed a 15- member
            cross-functional (engineering, design) team and coordinated with
            project managers across different time zones towards the execution
            of multiple projects. Developed a cybersecurity and brand protection
            web app deployed at Black HAT event, Nov 15 - 17, 2022, Riyadh SA
          </p>
          {bios.map((bio) => {
            return (
              <div className="bio" key={bio.id}>
                <span className="bioKey">
                  {bio.icon}
                  {bio.key}
                </span>
                <a href={bio.link} className="bioValue">
                  <span className="bioValue">{bio.value}</span>
                </a>
              </div>
            );
          })}
          <motion.a
            href={Resume}
            download="Bilal's Resume"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
