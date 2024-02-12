import React from 'react';

import card from '../components/images/card.png';
import logo1 from '../components/images/logo1.svg';
import logo2 from '../components/images/logo2.svg';
import logo3 from '../components/images/logo3.svg';
import logo4 from '../components/images/logo4.svg';
import risefinance from '../components/images/RiseFinance.png';
import hamburguer from '../components/images/hamburguer.png';
import '../styles/HeroSection.css';
import '../styles/media.css';


function heroSection() {
  return (
    <div>
      <header>
        <div>
          <img src={risefinance} alt="Rise Finance" />
        </div>
        <ul>
          <a href="#" id="navbar-bnt"><li>Company</li></a>
          <a href="#" id="navbar-bnt"><li>Features</li></a>
          <a href="#" id="navbar-bnt"><li>Pricing</li></a>
          <a href="#" id="navbar-bnt"><li>Insights</li></a>
        </ul>
      </header>
      <div className='hamburguer-btn' id='menu-btn'><img src={hamburguer} alt="" /></div>
      <div className="menu-mobile" id='menu-mobile'>
        <h1>X</h1>
        <div className="hamburguer">
          <ul>
            <a href="#" id="navbar-bnt"><li>Company</li></a>
            <a href="#" id="navbar-bnt"><li>Features</li></a>
            <a href="#" id="navbar-bnt"><li>Pricing</li></a>
            <a href="#" id="navbar-bnt"><li>Insights</li></a>
          </ul>
        </div>
      </div>
      <main>
        <aside>
          <h1><span>Scale Fintech</span><br /> Safe And Secure</h1>
          <p>Ship your fintech products to your customers with fast and reliable processes. Secure and highly customizable. Rise Finance is the best partner for you if you want to scale your finance products worldwide.</p>
          <button><div>consultation</div></button>
        </aside>
        <article>
          <img src={card} alt="card-example" />
        </article>
      </main>
      <footer>
        <img src={logo1} alt="logo" />
        <img src={logo2} alt="logo" />
        <img src={logo3} alt="logo" />
        <img src={logo4} alt="logo" />
      </footer>



    </div>
  );
}

export default heroSection;
