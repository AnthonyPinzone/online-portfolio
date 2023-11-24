import { useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../PageHeader/PageHeader';
import Footer from '../PageFooter/PageFooter';

export function PageLayout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <main className="page-content">{children}</main>
      <Footer
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node,
};
