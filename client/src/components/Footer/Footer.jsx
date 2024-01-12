import React from 'react';
import styles from "./footer.module.css";

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
      <div  style={{
        backgroundImage: `url('./src/assets/footer1.png')`,
        height: '49vh', 
      }} className="h-screen z-0 bg-cover bg-center "> 
      </div>
      </div>
  );
};
export default Footer;
