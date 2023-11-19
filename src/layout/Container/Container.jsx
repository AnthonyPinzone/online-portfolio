import PropTypes from 'prop-types';
import './Container.scss';

export function Container({ children, className }) {
  return <div className={`container ${className}`}>{children}</div>;
}

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
