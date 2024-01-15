import React from "react";
import styles from "./footer.module.css";
import { Link } from 'react-scroll';
import footer1 from "../../assets/footer1.png"

const Footer = () => {
  return (
    <div className={styles.area}>
      <ul className={styles.circles}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div
        style={{
          backgroundImage: `url(${footer1})`,
          height: "49vh",
        }}
        className="h-screen z-0 bg-cover bg-center "
      >
        <footer className="footer p-10 justify-center gap-48 bg-neutral bg-transparent  text-neutral-content">
          <aside className="mt-48">
            <img className="w-32" src="../src/assets/barkNBath.png" alt="" />
            <p>
              BarkNBath
              <br />
              Pampering Your Pets on the Go!
            </p>
          </aside>
          <nav className="mt-64">
            <header className="footer-title">Quick Links</header>
            <div className="grid grid-flow-col gap-4">
              
            
              <Link to="about-us" smooth={true} duration={500}>About us</Link>
              <Link to="services" smooth={true} duration={500}>Services</Link>
              <Link to="services" smooth={true} duration={500}>Services</Link>
              <Link to="map">Locations</Link>
              <a href="#testimonials">Testimonials</a>
              <a href="#faq">FAQ</a>
            </div>
          </nav>
        </footer>
      </div>
    </div>
  );
};
export default Footer;
