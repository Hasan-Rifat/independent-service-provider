import React from "react";
import "./SocialLogin.css";
import fb from "../../../images/icone/facebook-logo.png";
import google from '../../../images/icone/g.png'

const SocialLogin = () => {
  return (
    <div>
      <div className="flex items-center w-full py-5">
        <div className="divider"></div>
        <p className="text">Or Log-in-with</p>
        <div className="divider"></div>
      </div>

      <button className="btn  w-50 ">
        <div className="flex bg-logo items-center justify-center">
          <img className="block w-10" src={fb} alt="" />
          <span className="block text-icon ml-4">Facebook</span>
        </div>
      </button>
      <button className="btn  w-50 ">
        <div className="flex bg-logo items-center justify-center">
          <img className="block w-10"  src={google} alt="" />
          <span className="block text-icon ml-4">Google</span>
        </div>
      </button>
    </div>
  );
};

export default SocialLogin;
