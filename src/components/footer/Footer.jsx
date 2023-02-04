import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./style.scss";

const footerData = [
  {
    title: "useful links",
    links: [
      { item: "Terms Of Use" },
      { item: "Privacy-Policy" },
      { item: "About" },
      { item: "Blog" },
      { item: "FAQ" },
    ],
  },
  {
    title: "social links",
    links: [
      { icon: <FaFacebookF /> },
      { icon: <FaInstagram /> },
      { icon: <FaTwitter /> },
      { icon: <FaLinkedin /> },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <div className="top">
          <ul className="menuItems">
            {footerData[0].links.map((curItem, idx) => {
              return (
                <li key={idx} className="menuItem">
                  {curItem.item}
                </li>
              );
            })}
          </ul>
          <div className="socialIcons">
            {footerData[1].links.map((curItem, idx) => {
              return (
                <span key={idx} className="icon">
                  {curItem.icon}
                </span>
              );
            })}
          </div>
        </div>

        <div className="bottom">
          <p className="copyright">
            © {new Date().getFullYear()} <span>Shaad Imran</span>. All Rights
            Reserved
          </p>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
