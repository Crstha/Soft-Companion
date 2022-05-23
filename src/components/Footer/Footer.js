import { Avatar } from "@mui/material";
import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="container__footer">
      <div className="row">
        <div className="col footer__left">
          <h4 className="footer__title">Soft Companion</h4>
          <ul className="list-unstyled">
            <li>&copy;{new Date().getFullYear()} Soft Companion Pvt. Ltd </li>
          </ul>
        </div>
        <div className="col footer__right">
          <h4>Contact Us</h4>
          <ul className="list-unstyled">
            <li>Soft Companion Pvt. Ltd.</li>
            <li>Radhe-Radhe, Bhaktapur</li>
            <li>Bhaktapur, Nepal</li>
            <li>
              Mail to:{" "}
              <span style={{ color: "maroon" }}>
                info@softcompanion@gmail.com
              </span>
            </li>
          </ul>
          <h4>Follow Us</h4>
          <li className="list-unstyled social_links">
            <a href="https://www.facebook.com/softcompanion/">
              <Avatar src="https://imgs.search.brave.com/3hoRI2pICAZGO_ywQDgAIi9usVuAHsYMVQ1sbpiHnBI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jbGFz/c2ljcm9jazk5NS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMTEvRmFjZWJv/b2stbG9nby5wbmc" />
            </a>
            <a href="https://www.instagram.com/softcompanion/">
              <Avatar src="https://imgs.search.brave.com/Yj1DTX9g4wufMfI-U2NsoV9uCEvLzQ96l4kFEY-t8k0/rs:fit:744:744:1/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vYmxvZy53/aGl0bmV5ZGF3bm11/c2ljLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxNy8wOS9p/bnN0YS1sb2dvLnBu/Zz9yZXNpemU9NzQ0/JTJDNzQ0JnNzbD0x" />
            </a>
            <a>
              <Avatar src="https://imgs.search.brave.com/HSqZIViVT05nuvKYi1zxI4wa9U4S0cYVgXJBDNUjowc/rs:fit:1200:1200:1/g:ce/aHR0cDovLzEwMDBs/b2dvcy5uZXQvd3At/Y29udGVudC91cGxv/YWRzLzIwMTcvMDYv/VHdpdHRlci1Mb2dv/LnBuZw" />
            </a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Footer;
