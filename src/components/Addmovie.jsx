import React, { useState } from "react";

const Addmovie = ({ children }) => {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow((current) => !current);
  };
  let buttonText = show ? "Cancel" : "Add New Movies";
  return (
    <div>
      {show && children}
      <button className="btn btn-success" onClick={toggle}>
        {buttonText}
      </button>
    </div>
  );
};

export default Addmovie;
