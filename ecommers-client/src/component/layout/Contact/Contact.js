import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:ashabuddin54321@gmail.com">
        <Button>Contact: dev.mubarakali@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
