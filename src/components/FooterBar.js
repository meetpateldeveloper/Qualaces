import React from "react";
import "./FooterBar.css";

const FooterBar = () => {
  return (
    <footer className="Doggera-footer">
      <ul className="doggora-footer-list1">
        <li className="footerlist">
          <a href="careers" className="footerlink">
            Careers
          </a>
        </li>
        <li className="footerlist">
          <a href="about-us" className="footerlink">
            About Us
          </a>
        </li>
        <li className="footerlist">
          <a href="/contact-us" className="footerlink">
            Contact Us
          </a>
        </li>
        <li className="footerlist">
          <a href="/services" className="footerlink">
            Services
          </a>
        </li>
        <li className="footerlist">
          <a href="/privacy-policy" className="footerlink">
            Privacy Policy
          </a>
        </li>
      </ul>
      <ul className="doggora-footer-list2">
        <li className="footerlist">
          <a href="/help" className="footerlink">
            Help
          </a>
        </li>
        <li className="footerlist">
          <a href="/payments" className="footerlink">
            Payments
          </a>
        </li>
        <li className="footerlist">
          <a href="/contact-us" className="footerlink">
            Shippping
          </a>
        </li>
        <li className="footerlist">
          <a href="/contact-us" className="footerlink">
            Customer Satisfaction Gurantee
          </a>
        </li>
        <li className="footerlist">
          <a href="/contact-us" className="footerlink">
            FAQ
          </a>
        </li>
        <li className="footerlist">
          <a href="/contact-us" className="footerlink">
            Report
          </a>
        </li>
      </ul>
      <ul className="doggora-footer-list3">
        <li className="footerlist">
          <a href="#" className="footerlink">
            Social
          </a>
        </li>
        <li className="footerlist">
          <a
            href="https://www.facebook.com"
            className="footerlink"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./facebook.png" alt="twitter" className="icon-image" />
            Facebook
          </a>
        </li>
        <li className="footerlist">
          <a
            href="https://www.instagram.com"
            className="footerlink"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./instagram.png" alt="twitter" className="icon-image" />
            Instagram
          </a>
        </li>
        <li className="footerlist">
          <a
            href="https://www.twitter.com"
            className="footerlink"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./twitter.png" alt="twitter" className="icon-image" />
            Twitter / X
          </a>
        </li>
        <li className="footerlist">
          <a
            href="https://www.youtube.com"
            className="footerlink"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./youtube.png" alt="twitter" className="icon-image" />
            YouTube
          </a>
        </li>
      </ul>
      <div>
        <p>Mail Us:</p>
        <p>Qualaces Internet Private Limited</p>
        <p>1215 Manitoba Rd</p>
        <p>London Ontario</p>
        <p>Canada N6R 3R6</p>
      </div>
      <div>
        <p>Registered Office Adress:</p>
        <p>Qualaces Internet Private Limited</p>
        <p>1215 Manitoba Rd</p>
        <p>London Ontario</p>
        <p>Canada N6R 3R6</p>
        <p>CIN:10002384738932</p>
        <p>Telephone: +1-201-233-9800</p>
      </div>
    </footer>
  );
};

export default FooterBar;
