import PropTypes from 'prop-types';
import { Container } from '../Container/Container';
import { ScrollToElement, ScrollToPosition } from '../../components/';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import './PageHeader.scss';

export default function PageHeader({ isMobileMenuOpen, setIsMobileMenuOpen }) {
  const animationOptions = {
    delay: isMobileMenuOpen ? 300 : 0,
    offset: -76,
  };

  return (
    <header className="header">
      <Container className="header__container">
        <h1 className="header__title">
          <ScrollToPosition
            position={1000}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Anthony Pinzone
          </ScrollToPosition>
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
              <ScrollToElement
                className="header__nav-link"
                to="projects"
                onClick={() => setIsMobileMenuOpen(false)}
                {...animationOptions}
              >
                Projects
              </ScrollToElement>
            </li>
            <li className="header__nav-item">
              <ScrollToElement
                className="header__nav-link"
                to="experience"
                onClick={() => setIsMobileMenuOpen(false)}
                {...animationOptions}
              >
                Experience
              </ScrollToElement>
            </li>
            <li className="header__nav-item">
              <ScrollToElement
                className="header__nav-link"
                to="footer"
                onClick={() => setIsMobileMenuOpen(false)}
                {...animationOptions}
              >
                Contact
              </ScrollToElement>
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
