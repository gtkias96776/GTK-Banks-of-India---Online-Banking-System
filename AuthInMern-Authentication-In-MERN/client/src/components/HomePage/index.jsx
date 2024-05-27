import React from 'react';
import { Link } from 'react-router-dom';
import './styles.module.css'; // Import the CSS file
import bankLogo from '../Assets/bank-removebg-preview.png';

const HomePage = () => {
  return (
    <div className="page-container">
      <header>
        <div className="logo-container">
          <h1>GTK Banks of India</h1>
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>
      
      <div className="large-image-container">
        <img src={bankLogo} alt="Bank Logo" />
      </div>

      <div className="content-container">
        <aside className="right-content">
          <section className="info-cards">
            <div className="info-card">
              <h2>Welcome to GTK Banks!</h2>
              <br />
              <p>
                GTK Banks of India aims to be the most trusted and preferred banking partner in the country. We envision a future where every Indian has easy access to financial services that help them achieve their dreams and aspirations. Our commitment to transparency, integrity, and customer-centric services is the cornerstone of our operations.
              </p>
            </div>
            <br />
            <div className="info-card">
              <h3>Our Vision</h3>
              <p>GTK Banks of India aims to be the most trusted and preferred banking partner in the country. We envision a future where every Indian has easy access to financial services that help them achieve their dreams and aspirations. Our commitment to transparency, integrity, and customer-centric services is the cornerstone of our operations.</p>
            </div>
            <br />
            <div className="info-card">
              <h3>Comprehensive Banking Solutions</h3>
              <p>We offer a wide range of banking services designed to cater to the varied needs of our customers. From personal banking and business banking to digital banking and investment services, GTK Banks of India is your one-stop solution for all your financial needs.</p>
            </div>
            <br />
            <div className="info-card">
              <h3>Personal Banking</h3>
              <p>Our personal banking services are designed to provide you with the convenience and flexibility you need to manage your finances effectively. Whether you're looking for a savings account with competitive interest rates, a checking account with no hidden fees, or a fixed deposit that guarantees returns, we have the perfect solution for you.</p>
            </div>
            <br />
            <div className="info-card">
              <h3>Business Banking</h3>
              <p>For businesses, GTK Banks of India provides a suite of banking solutions that support your growth and success.</p>
            </div>
            <br />
            <div className="info-card">
              <h3>Join Us Today</h3>
              <p>Join the GTK Banks of India family today and experience the difference. With our innovative banking solutions, dedicated customer service, and commitment to excellence, we are here to help you achieve your financial goals. Visit our website or your nearest branch to open an account and start your journey with us.</p>
            </div>
          </section>
        </aside>
      </div>

      <footer>
        <p>Contact us: gtkbanks@coimbatore.com | +1 (555) 123-4567</p>
        <p>&copy; 2020 GTK Banks of India. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
