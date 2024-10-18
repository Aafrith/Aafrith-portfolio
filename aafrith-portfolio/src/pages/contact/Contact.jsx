import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaHackerrank
} from 'react-icons/fa';

import { FiSend } from 'react-icons/fi';

import "./contact.css"

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">
            Connect with Me !
          </h3>
          <p className="contact__description">
            Looking to collaborate on projects or have questions about my work? Feel free to contact me using the form. I aim to respond within 24 hours and would be happy to discuss how we can work together.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className='info__icon' />

              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">maafrith15919@gmail.com</h4>
              </div>
            </div>
          </div>

          <div className="contact__info">
            <div className="info__item">
              <FaPhoneSquareAlt className='info__icon' />

              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+94773054223</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a href="https://fb.com/mohamed aafrith" className="contact__social-link" target='blank'><FaFacebookF/></a>
            <a href="https://instagram.com/m_aafrith99" className="contact__social-link" target='blank'><FaInstagram/></a>
            <a href="https://linkedin.com/in/mohamed aafrith" className="contact__social-link" target='blank'><FaLinkedin/></a>
            <a href="https://www.hackerrank.com/profile/Aafrith3795" className="contact__social-link" target='blank'><FaHackerrank/></a>
          </div>


        </div>

        <form className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input type="text" placeholder='Your Name' className="form__control" />
            </div>

            <div className="form__input-div">
              <input type="email" placeholder='Your Email' className="form__control" />
            </div>

            <div className="form__input-div">
              <input type="text" placeholder='Your Subject' className="form__control" />
            </div>
          </div>

          <div className="form__input-div">
            <textarea placeholder='Your Message' className="form__control textarea"></textarea>
          </div>

          <button className='button'>
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;