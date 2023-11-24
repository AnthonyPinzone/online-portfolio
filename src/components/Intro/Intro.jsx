import { Container } from '../../layout';
import { ScrollToElement } from '../ScrollLinks/ScrollToElement';
import { FaCodepen, FaGithub, FaLinkedin } from 'react-icons/fa';
import profilePhoto from '../../assets/images/anthony-pinzone-profile-photo-cropped.jpg';
import './Intro.scss';

export function Intro() {
  return (
    <section className="intro">
      <Container className="intro__container">
        <div className="intro-details">
          <p className="intro-details__title">Hi! I&apos;m Anthony</p>
          <p className="intro-details__paragraph">
            I&apos;m a Frontend Developer driven by the challenge of
            transforming captivating designs into dynamic websites. Beyond the{' '}
            <span className="mono">pixels</span> and{' '}
            <span className="mono">breakpoints</span>, my passion extends to
            mentoring aspiring developers on their coding journey.
          </p>
          <p className="intro-details__paragraph">
            I&apos;d love to connect,{' '}
            <ScrollToElement className="intro__cta" to="footer">
              reach out today
            </ScrollToElement>{' '}
            and let&apos;s build something awesome!
          </p>
          <ul className="intro-details__social">
            <li className="intro-details__social-item">
              <a
                className="intro-details__social-link"
                href="https://www.linkedin.com/in/anthonyjpinzone/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </li>
            <li className="intro-details__social-item">
              <a
                className="intro-details__social-link"
                href="https://github.com/AnthonyPinzone"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub /> Github
              </a>
            </li>
            <li className="intro-details__social-item">
              <a
                className="intro-details__social-link"
                href="https://codepen.io/AnthonyPinzone"
                target="_blank"
                rel="noreferrer"
              >
                <FaCodepen /> CodePen
              </a>
            </li>
          </ul>
        </div>
        <figure className="intro-photo">
          <img
            className="intro-photo__img"
            src={profilePhoto}
            alt="Anthony standing on a boat overlooking the Hudson River in New York City"
          />
        </figure>
      </Container>
    </section>
  );
}
