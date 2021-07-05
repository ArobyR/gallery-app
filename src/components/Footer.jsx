import React from "react";

const Footer = () => {
  return (
    <div className="footer bg-dark">
      <p className="text-center text-white p-4">
        Aroby R. - &copy; {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
