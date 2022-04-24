import React  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/footer.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook,faTwitter, faInstagram, faYoutube  }from '@fortawesome/free-brands-svg-icons';
import {AiOutlineSend} from 'react-icons/ai'

function Footer() {
      return (
        <footer className="footer-section">
          <div className="container">
            <div className="footer-text">
              <div className="row">
                <div className="col-lg-4">
                  <div className="ft-about">
                    <div>
                      <img src= {process.env.PUBLIC_URL+ "/image/logo.png"} alt="background-img" className="footer-img"/>
                    </div>
                    <p>Frank Learnt React JS</p>
                    <div className="fa-social">
                        <a href="https://www.facebook.com/Golde341/">
                          <FontAwesomeIcon icon={faFacebook} className="footer-icon" />
                        </a>
                        <a href="https://twitter.com/DongViet34">
                          <FontAwesomeIcon icon={faTwitter} className="footer-icon" />  
                        </a>
                        <a href="https://www.instagram.com/dongviet34_/">
                          <FontAwesomeIcon icon={faInstagram} className="footer-icon" />
                        </a>
                        {/* <a href="https://www.youtube.com/channel/UCrF8X_A6ClAJm4OmrHfSaMA">
                          <FontAwesomeIcon icon={faYoutube} className="footer-icon" />  
                        </a> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 offset-lg-1">
                  <div className="ft-contact">
                    <h6>Contact</h6>
                    <ul>
                      <li>Nguyen Dong Duc Viet from FPT SAP LAP</li>
                      <li>vietnddhe150938@fpt.edu.vn</li>
                      <li>Phenikaa Apartment, Thach Hoa, Thach That, Ha Noi</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 offset-lg-1">
                  <div className="ft-news">
                    <h6>Notification</h6>
                    <p>Get our message!!</p>
                    <form action="#" className="fn-form">
                      <input type="text" placeholder="Email" />
                      <AiOutlineSend id="icon_send"/>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;