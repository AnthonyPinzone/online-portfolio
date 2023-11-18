import PropTypes from 'prop-types';
import Header from './PageHeader';
import Footer from './PageFooter';

export function PageLayout({ children }) {
  return (
    <>
      <Header />
      <main className="page-content">{children}</main>
      <Footer />
    </>
  );
}

PageLayout.propTypes = {
  children: PropTypes.element,
};
