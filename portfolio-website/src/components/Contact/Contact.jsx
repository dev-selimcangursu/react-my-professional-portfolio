import React from "react";
import Info from "./Info";
import Form from "./Form";

function Contact() {
  return (
    <div
      id="contact" style={{ backgroundColor: "#001e35" }} className="w-full p-5 grid grid-cols-1 md:grid-cols-2 gap-5 text-white">
      <Info />
      <Form />
    </div>
  );
}

export default Contact;
