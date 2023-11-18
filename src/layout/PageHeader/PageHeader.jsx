import { Container } from '../Container';
import { DarkModeToggle } from '../../components';
import './PageHeader.scss';

export default function Header() {
  return (
    <header className="header">
      <Container className="header__container">
        <h1 className="header__title">Anthony Pinzone</h1>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a className="header__nav-link" href="">
                Projects
              </a>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" href="">
                Experience
              </a>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" href="">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <DarkModeToggle />
      </Container>
    </header>
  );
}
