import iconFacebook from '../images/img/icon_facebook.png'
import iconInstagram from '../images/img/icon_instagram.png'
import icon_twitter from '../images/img/icon_twitter.png'
import iconMail from '../images/img/icon_mail.png'
import iconTwitch from '../images/img/icon_twitch.png'

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="global-container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="addres">
              <h5>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</h5>
              <h5>binarcarrental@gmail.com</h5>
              <h5>081-233-334-808</h5>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12 mb-4">
            <div className="navigation">
              <ul>
                <li>
                  <a href="#Service">Our Service</a>
                </li>
                <li>
                  <a href="#why-us">why us</a>
                </li>
                <li>
                  <a href="#testi">Testimonial</a>
                </li>
                <li>
                  <a href="#faq-section">FAQ</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="sosmed">
              <h5>Connect with us</h5>
              <ul>
                <li>
                  <a href="#">
                    <img
                      src={iconFacebook}
                      alt="icon_facebook"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src={iconInstagram}
                      alt="icon_instagram"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src={icon_twitter}
                      alt="icon_twitter"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={iconMail} alt="icon_mail" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={iconTwitch} alt="icon_twitch" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="copyright">
              <h5>Copyright Binar 2022</h5>
              <div id="logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;