import React from "react";
import img from "../../images/404.jpg";

const NotFound = () => {
  return (
    <div className="container p-4">
      <img className="img-fluid" src={img} alt="" />
    </div>
  );
};

export default NotFound;
