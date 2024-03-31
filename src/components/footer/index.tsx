import React from "react";

const Footer = () => {
  return (
    <div className="mb-12 flex justify-center items-center">
      <p className="flex items-center justify-center">
        Copyright&nbsp;&nbsp;<span className="mt-1.5">&copy;</span>{" "}
        {new Date().getFullYear()}. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
