import React from "react";
import { Container } from "./";
import { BsArrowUpRight, BsFillSendFill, BsPersonVcard } from "react-icons/bs";
import { FaCodepen, FaGithub, FaLinkedin } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import "./PageFooter.scss";

export default function PageFooter() {
  return (
    <footer className='footer'>
      <Container className='footer__container'>
        <div className='footer__links'>
          <h5>Explore Some More</h5>
          <ul className='footer__links-list'>
            <li className='footer__links-item'>
              <a className='footer__links-link' href=''>
                <RiComputerLine /> Projects
              </a>
            </li>
            <li className='footer__links-item'>
              <a className='footer__links-link' href=''>
                <BsPersonVcard /> Experience
              </a>
            </li>
            <li className='footer__links-item'>
              <a className='footer__links-link' href=''>
                <FaLinkedin /> LinkedIn
              </a>
            </li>
            <li className='footer__links-item'>
              <a className='footer__links-link' href=''>
                <FaGithub /> Github
              </a>
            </li>
            <li className='footer__links-item'>
              <a className='footer__links-link' href=''>
                <FaCodepen /> CodePen
              </a>
            </li>
            <li className='footer__links-item'>
              <a className='footer__links-link' href=''>
                <BsArrowUpRight /> Resume
              </a>
            </li>
          </ul>
        </div>
        <div className='footer__outro'>
          <h5>Thanks for Stopping By</h5>
          <p>
            Whether you're a recruiter seeking top-notch talent, a fellow
            developer keen on collaboration, or someone eager to dive into the
            world of web development, I'm thrilled to connect. Let's chat about
            opportunities, projects, or the exciting journey of learning and
            building together. Feel free to drop a message in the form, I'm
            always up for a conversation.
          </p>
        </div>
        <form className='footer__contact-form'>
          <h5>Let's Connect!</h5>
          <div className='form-field'>
            <label htmlFor='name'>What's your name?</label>
            <input type='text' name='name' id='name' placeholder='Name' />
          </div>
          <div className='form-field'>
            <label htmlFor='email'>How can I reach you?</label>
            <input type='email' name='email' id='email' placeholder='Email' />
          </div>
          <div className='form-field'>
            <label htmlFor='message'>What would you like to ask or say?</label>
            <textarea
              name='message'
              id='message'
              cols='30'
              rows='5'
              placeholder='Message'
            ></textarea>
          </div>
          <button type='submit' className='button button--yellow'>
            Send Message <BsFillSendFill />
          </button>
        </form>
      </Container>
    </footer>
  );
}
