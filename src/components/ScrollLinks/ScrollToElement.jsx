import { useContext } from 'react';
import PropTypes from 'prop-types';
import { PrefersReducedMotionContext } from '../../common/contexts';
import { Link } from 'react-scroll';

export function ScrollToElement({
  className = '',
  children,
  delay = 0,
  duration = 500,
  ...options
}) {
  const { prefersReducedMotion } = useContext(PrefersReducedMotionContext);

  const defaultOptions = {
    activeClass: 'active',
    delay: prefersReducedMotion ? 0 : delay,
    duration: prefersReducedMotion ? 0 : duration,
    smooth: true,
    spy: true,
  };

  return (
    <Link
      className={`scroll-link ${className}`}
      {...defaultOptions}
      {...options}
    >
      {children}
    </Link>
  );
}

ScrollToElement.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  delay: PropTypes.number,
  duration: PropTypes.number,
};
