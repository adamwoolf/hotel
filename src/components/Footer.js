import React from "react";
import {
  FaWifi,
  FaInstagramSquare,
  FaTwitter,
  FaFacebookSquare,
} from "react-icons/fa";
import logo from "../assets/los-cocos-iso-footer.png";

const Footer = () => {
  return (
    <>
      <hr />
      <div className="footer">
        <div>
          <div>
            <img src={logo} />
          </div>
          <div>
            <ul>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>About us</li>
              <li>Partners</li>
            </ul>
          </div>
        </div>
        <div>
          <a href="mailto:reservations@lococosbungalows.com">
            reservations@lococosbungalows.com
          </a>
          <a href="tel:+34982458720">Tel: +34 982 458 720</a>
          <FaWifi color="grey" size={20} style={{ marginLeft: 5 }} />
          <FaFacebookSquare color="grey" size={20} style={{ marginLeft: 5 }} />
          <FaInstagramSquare color="grey" size={20} style={{ marginLeft: 5 }} />
          <FaTwitter color="grey" size={20} style={{ marginLeft: 5 }} />
        </div>
      </div>
    </>
  );
};

export default Footer;
