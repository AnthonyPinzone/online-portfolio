import { useContext } from 'react';
import PropTypes from 'prop-types';
import { PrefersReducedMotionContext } from '../../common/contexts';
import { animateScroll as scroll } from 'react-scroll';

export function ScrollToPosition({
  className = '',
  children,
  delay = 0,
  duration = 500,
  onClick,
  position,
  ...options
}) {
  const { prefersReducedMotion } = useContext(PrefersReducedMotionContext);

  const animationOptions = {
    delay: prefersReducedMotion ? 0 : delay,
    duration: prefersReducedMotion ? 0 : duration,
    ...options,
  };

  const handleClick = () => {
    // Do whatever click event was passed in first
    onClick();

    // Then scroll based on the position provided
    if (position === 'top') {
      return scroll.scrollToTop(animationOptions);
    } else if (position === 'bottom') {
      return scroll.scrollToBottom(animationOptions);
    } else if (typeof position === 'number') {
      return scroll.scrollTo(position, animationOptions);
    } else {
      // If no position provided do nothing.
      return false;
    }
  };

  return (
    <a className={`scroll-link ${className}`} onClick={handleClick}>
      {children}
    </a>
  );
}

ScrollToPosition.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  delay: PropTypes.number,
  duration: PropTypes.number,
  onClick: PropTypes.func,
  position: PropTypes.oneOfType([
    PropTypes.oneOf(['top', 'bottom']),
    PropTypes.number,
  ]).isRequired,
};
