import PropTypes from 'prop-types';
import { Container } from '../Container/Container';
import { ScrollToElement } from '../../components/';
import { BsArrowUpRight, BsFillSendFill, BsPersonVcard } from 'react-icons/bs';
import { FaCodepen, FaGithub, FaLinkedin } from 'react-icons/fa';
import { RiComputerLine } from 'react-icons/ri';
import resumeLink from '../../assets/docs/Anthony-Pinzone_Frontend-Developer_Resume_2023.pdf';
import './PageFooter.scss';

export default function PageFooter({ isMobileMenuOpen, setIsMobileMenuOpen }) {
  const animationOptions = {
    delay: isMobileMenuOpen ? 300 : 0,
    offset: -76,
  };
  return (
    <footer id="footer" className="footer">
      <Container className="footer__container">
        <div className="footer__links">
          <h5>Explore Some More</h5>
          <ul className="footer__links-list">
            <li className="footer__links-item">
              <ScrollToElement
                className="footer__links-link"
                to="projects"
                onClick={() => setIsMobileMenuOpen(false)}
                {...animationOptions}
              >
                <RiComputerLine /> Projects
              </ScrollToElement>
            </li>
            <li className="footer__links-item">
              <ScrollToElement
                className="footer__links-link"
                to="experience"
                onClick={() => setIsMobileMenuOpen(false)}
                {...animationOptions}
              >
                <BsPersonVcard /> Experience
              </ScrollToElement>
            </li>
            <li className="footer__links-item">
              <a
                className="footer__links-link"
                href="https://www.linkedin.com/in/anthonyjpinzone/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </li>
            <li className="footer__links-item">
              <a
                className="footer__links-link"
                href="https://github.com/AnthonyPinzone"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub /> Github
              </a>
            </li>
            <li className="footer__links-item">
              <a
                className="footer__links-link"
                href="https://codepen.io/AnthonyPinzone"
                target="_blank"
                rel="noreferrer"
              >
                <FaCodepen /> CodePen
              </a>
            </li>
            <li className="footer__links-item">
              <a
                className="footer__links-link"
                href={resumeLink}
                target="_blank"
                rel="noreferrer"
              >
                <BsArrowUpRight /> Resume
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__outro">
          <h5>Thanks for Stopping By</h5>
          <p>
            Whether you&apos;re a recruiter seeking top-notch talent, a fellow
            developer keen on collaboration, or someone eager to dive into the
            world of web development, I&apos;m thrilled to connect. Let&apos;s
            chat about opportunities, projects, or the exciting journey of
            learning and building together. Feel free to drop a message in the
            form, I&apos;m always up for a conversation.
          </p>
        </div>
        <form className="footer__contact-form">
          <h5>Let&apos;s Connect!</h5>
          <div className="form-field">
            <label htmlFor="name">What&apos;s your name?</label>
            <input type="text" name="name" id="name" placeholder="Name" />
          </div>
          <div className="form-field">
            <label htmlFor="email">How can I reach you?</label>
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
          <div className="form-field">
            <label htmlFor="message">What would you like to ask or say?</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Message"
            ></textarea>
          </div>
          <button type="submit" className="button button--yellow">
            Send Message <BsFillSendFill />
          </button>
        </form>
      </Container>
    </footer>
  );
}

PageFooter.propTypes = {
  isMobileMenuOpen: PropTypes.bool,
  setIsMobileMenuOpen: PropTypes.func,
};
