import { useState, useContext } from 'react';
import { PrefersReducedMotionContext } from '../../common/contexts';
import { Container } from '../Container/Container';
import { Link, animateScroll as scroll } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import './PageHeader.scss';

export default function Header() {
  const { prefersReducedMotion } = useContext(PrefersReducedMotionContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const animationOptions = {
    activeClass: 'active',
    duration: prefersReducedMotion ? 0 : 500,
    delay: !prefersReducedMotion && isMobileMenuOpen ? 300 : 0,
    offset: -76,
    smooth: true,
    spy: true,
  };

  return (
    <header className="header">
      <Container className="header__container">
        <h1 className="header__title">
          <a
            onClick={() => {
              setIsMobileMenuOpen(false);
              scroll.scrollToTop({ duration: animationOptions.duration });
            }}
          >
            Anthony Pinzone
          </a>
        </h1>
        <nav className="header__nav">
          <button
            className="header__nav-button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={
              isMobileMenuOpen
                ? 'Close Navigation Menu'
                : 'Open Navigation Menu'
            }
          >
            {isMobileMenuOpen ? <MdClose /> : <GiHamburgerMenu />}
          </button>
          <ul
            className={`header__nav-list ${
              isMobileMenuOpen ? 'header__nav-list--open' : ''
            }`}
          >
            <li className="header__nav-item">
              <Link
                className="header__nav-link"
                to="projects"
                onClick={() => setIsMobileMenuOpen(false)}
                {...animationOptions}
              >
                Projects
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                className="header__nav-link"
                to="experience"
                onClick={() => setIsMobileMenuOpen(false)}
                {...animationOptions}
              >
                Experience
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                className="header__nav-link"
                to="footer"
                onClick={() => setIsMobileMenuOpen(false)}
                {...animationOptions}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
