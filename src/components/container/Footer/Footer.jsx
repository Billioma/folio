import React from "react";
import "./Footer.scss";
import { socialIcons } from "../../../Data";
import { motion } from "framer-motion";

const Footer = () => {
  const dates = new Date();
  const year = dates.getFullYear();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="footer"
    >
      <div className="copyright">
        <p>
          Copyright&copy;{year} All rights reserved.Made by{" "}
          <span>Bilal Omari</span>
        </p>
      </div>
      <div className="followMe">
        <h4>Follow Me</h4>
        <div className="stick"></div>
        <div className="social_icons">
          {socialIcons.map((socialIcon, index) => {
            return (
              <a href={socialIcon.link} key={index}>
                <div>{socialIcon.icon}</div>
              </a>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
