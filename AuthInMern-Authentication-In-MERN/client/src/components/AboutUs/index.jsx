// AboutUs.js
import React from 'react';
import { Link } from 'react-router-dom';
import gtk from '../Assets/gtk.jpg';
import styles from './styles.module.css';

const AboutUs = () => {
  return (
    <div>
      <header>
        <div className={styles['logo-container']}>
          <h1>GTK Banks of India</h1>
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>
      <div>
        <img src={gtk} className={styles.tkn} style={{ width: '200px' }} alt='vimal' />
        <h2 className={styles.gtk}>
           THIRUKUMARAN.G
        </h2>
        <p className={styles.pvi1}>
          Founder of GTK Bank
        </p>
        <h3>About GTK Bank of India :</h3>
        <p className={styles.t}>The GTK Banks of India is a visionary financial institution that stands as a beacon of trust and innovation in the banking sector. With a commitment to excellence and customer-centricity at its core, GTK Banks has redefined the landscape of banking services, setting new standards for reliability, transparency, and efficiency. Established with the mission to empower individuals and businesses with comprehensive financial solutions, GTK Banks offers a wide array of services tailored to meet the diverse needs of its customers. Whether it's personal banking, corporate banking, investment services, or digital banking solutions, GTK Banks provides a seamless and intuitive experience that simplifies the complexities of managing finances. With a focus on accessibility and inclusivity, GTK Banks ensures that every customer, regardless of their background or location, has access to essential banking services that enable them to achieve their financial goals. Moreover, GTK Banks is dedicated to leveraging cutting-edge technology and innovative practices to enhance the customer experience and drive digital transformation in the banking industry. From mobile banking apps to online account management platforms, GTK Banks harnesses the power of technology to deliver banking solutions that are secure, convenient, and user-friendly. As a trusted financial partner, GTK Banks fosters long-lasting relationships built on integrity, reliability, and mutual respect. Whether it's helping individuals save for their future, supporting businesses in their growth endeavors, or contributing to the economic development of communities, GTK Banks is committed to making a positive impact on the lives of its customers and society as a whole. With a strong emphasis on corporate social responsibility and sustainable practices, GTK Banks strives to be a responsible corporate citizen, actively engaging in initiatives that promote social welfare, environmental conservation, and economic empowerment. In essence, GTK Banks embodies the values of integrity, innovation, and inclusivity, serving as a catalyst for progress and prosperity in the banking sector and beyond.</p>
      </div>
    </div>
  );
};

export default AboutUs;
