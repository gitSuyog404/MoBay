import React from "react";

const Footer = () => {
  return (
    <footer className="my-2 mx-3 flex justify-center items-center">
      <div>
        <p>Copyright &copy; {new Date().getFullYear()} Mobay</p>
      </div>
    </footer>
  );
};

export default Footer;
