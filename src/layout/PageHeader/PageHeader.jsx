import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';

import { Container } from '../Container/Container';
import './PageHeader.scss';

export default function PageHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const animationOptions = {
    delay: isMobileMenuOpen ? 300 : 0,
  };

  return (
    <header id="page-header" className="page-header">
      <Container className="page-header__container">

        <Link
          className="page-header__title"
          to="/"
          onClick={() => setIsMobileMenuOpen(false)}
          state={{ scrollTarget: 'top', animationOptions }}
          preventScrollReset={pathname === '/'}
        >
          Anthony Pinzone
        </Link>

        <nav className="page-header__nav">
          <button
            className="page-header__nav-button"
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
            className={`page-header__nav-list ${isMobileMenuOpen ? 'page-header__nav-list--open' : ''
              }`}
          >
            <li className="page-header__nav-item">
              <Link
                className="page-header__nav-link"
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                state={{ scrollTarget: 'projects', animationOptions }}
                preventScrollReset={pathname === '/'}
              >
                Projects
              </Link>
            </li>
            <li className="page-header__nav-item">
              <Link
                className="page-header__nav-link"
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                state={{ scrollTarget: 'experience', animationOptions }}
                preventScrollReset={pathname === '/'}
              >
                Experience
              </Link>
            </li>
            <li className="page-header__nav-item">
              <Link
                className="page-header__nav-link"
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                state={{ scrollTarget: 'footer', animationOptions }}
                preventScrollReset={pathname === '/'}
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

PageHeader.propTypes = {
  isMobileMenuOpen: PropTypes.bool,
  setIsMobileMenuOpen: PropTypes.func,
};
