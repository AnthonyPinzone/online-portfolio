import React from "react";
import { FaCodepen, FaGithub, FaLinkedin } from "react-icons/fa";
import profilePhoto from "../../assets/images/anthony-pinzone-profile-photo-cropped.jpg";
import "./Intro.scss";

export function Intro() {
  return (
    <section className='intro'>
      <div className='container intro__container'>
        <div className='intro-details'>
          <p className='intro-details__title'>Hi! I'm Anthony</p>
          <p className='intro-details__paragraph'>
            I'm a Frontend Developer driven by the challenge of transforming
            captivating designs into dynamic websites. Beyond the{" "}
            <span className='mono'>pixels</span> and{" "}
            <span className='mono'>breakpoints</span>, my passion extends to
            mentoring aspiring developers on their coding journey.
          </p>
          <p className='intro-details__paragraph'>
            I'd love to connect,{" "}
            <a className='intro__cta' href=''>
              reach out today
            </a>{" "}
            and let's build something awesome!
          </p>
          <ul className='intro-details__social'>
            <li className='intro-details__social-item'>
              <a className='intro-details__social-link' href=''>
                <FaLinkedin /> LinkedIn
              </a>
            </li>
            <li className='intro-details__social-item'>
              <a className='intro-details__social-link' href=''>
                <FaGithub /> Github
              </a>
            </li>
            <li className='intro-details__social-item'>
              <a className='intro-details__social-link' href=''>
                <FaCodepen /> CodePen
              </a>
            </li>
          </ul>
        </div>
        <figure className='intro-photo'>
          <img
            className='intro-photo__img'
            src={profilePhoto}
            alt='Anthony standing on a boat overlooking the Hudson River in New York City'
          />
        </figure>
      </div>
    </section>
  );
}
