import React from 'react';
import './Homepage.css';

const HomePage = () => {
  return (
    <>
    <section class="hero" id="home">
        <div class="hero-content">
            <h1>Upgrade your meals.</h1>
            <p>Easily buy and grow local produce</p>
            <a class="cta-button">Sign up</a>
            <a href="#impact" class="cta-button"> Why?</a>
        </div>
    </section>

    <section class="impact" id="impact">
        <div class="impact-content">
            <h2>11% of transport emissions were associated with the fruit and vegetable sector in Canada.</h2>
            <p>92% of imported fruit travel <b>more than 1500 km and 22% beyond 7000 km</b> in Canada. <br/> The enviromental and economic toll is not worth imported food. <br/><br/><br/><br/> </p>
            <p>https://foodpolicyforcanada.info.yorku.ca/goals/goal-5/sustainable-transportation/challenges-transport/</p>
        </div>
    </section>

    <section class="services" id="services">
        <div class="service-cards">
            <div class="card">
                <h3>Switch to local</h3>
                <p>See local alternatives to popular foods, or, grow your own!</p>
            </div>
            <div class="card">
                <h3>Community</h3>
                <p>Connect with local gardeners to become food-independant.</p>
            </div>
        </div>
    </section>

    <footer id="contact">
        <div class="footer-content">
            <h3>Contact Us</h3>
            <p>Email: info@greentheme.com</p>
            <p>Phone: (123) 456-7890</p>
            <ul class="social-links">
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
            </ul>
        </div>
    </footer>
    </>
  );
};

export default HomePage;
