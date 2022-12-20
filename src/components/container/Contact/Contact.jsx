import React, { useRef, useState } from "react";
import "./Contact.scss";
import { contacts } from "../../../Data";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_qxj8a0o",
      "contact_form",
      form.current,
      "_lUXdxtuoOOPggNCb"
    );

    setEmail("");
    setMessage("");
    setName("");
  };

  return (
    <div className="container" id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>get in touch</span>
        <h1>Contact Me</h1>
      </motion.div>
      <div className="contact_form">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="contact_left_container"
        >
          <h3>Just Say Hi</h3>
          <p className="contact_text">
            I look forward to discussing with you. I am just a message away!!
          </p>
          {contacts.map((contact) => {
            return (
              <a href={contact.link} key={contact.id}>
                <div className="contact_left">
                  <div className="icon">{contact.icon}</div>
                  <p>{contact.infoText}</p>
                </div>
              </a>
            );
          })}
        </motion.div>
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="contact_right"
        >
          <h3>Get In Touch</h3>
          <form ref={form} onSubmit={sendEmail}>
            <div className="row">
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setId(`Client #${(Math.random() * 100000) | 0}`);
                }}
                name="first_name"
                placeholder="First Name"
              />
              <input
                type="text"
                name="id"
                className="hide"
                defaultValue={id}
                // value={id}
                placeholder="Last name"
              />
            </div>
            <div className="row">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="user_email"
                placeholder="Email"
              />
            </div>
            <div className="row">
              <textarea
                placeholder="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name="message"
              ></textarea>
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <button className="btn" type="submit">
                Send
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
