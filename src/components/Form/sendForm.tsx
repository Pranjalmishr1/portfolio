"use client";

import React, { useState } from "react";
import styles from "./form.module.css";
import { toast } from "react-toastify";

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://formspree.io/f/mvzwjjnr",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      toast.error("Error sending message!");
    }
  };

  return (
    <div className={styles.send}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleInputChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email Address"
          required
          value={formData.email}
          onChange={handleInputChange}
        />

        <textarea
          name="message"
          cols={30}
          rows={10}
          placeholder="Your Message"
          required
          value={formData.message}
          onChange={handleInputChange}
        />

        <input
          type="submit"
          value="SEND"
          className={styles.submitBtn}
        />
      </form>
    </div>
  );
};