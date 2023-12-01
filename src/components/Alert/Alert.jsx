import { useState } from 'react';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';
import './Alert.scss';

export function Alert({
  className = '',
  dismissable = false,
  messages,
  onClose,
  show = false,
  status,
  title,
}) {
  const [isVisible, setIsVisible] = useState(show);

  const handleDismissal = () => {
    setIsVisible(false);
    onClose();
  };

  return (
    <div
      className={`alert alert--${status} ${
        isVisible ? 'alert--active' : ''
      } ${className}`}
    >
      {title && <h6 className="alert__title">{title}</h6>}
      {messages.length > 0 && (
        <ul className="alert__messages-list">
          {messages.map((message, index) => (
            <li className="alert__message" key={index}>
              {message}
            </li>
          ))}
        </ul>
      )}
      {dismissable && (
        <button
          className="alert__dismiss-button"
          type="button"
          onClick={handleDismissal}
        >
          <MdClose />
        </button>
      )}
    </div>
  );
}

Alert.propTypes = {
  status: PropTypes.oneOf(['success', 'error']),
  className: PropTypes.string,
  dismissable: PropTypes.bool,
  messages: PropTypes.arrayOf(PropTypes.string),
  onClose: PropTypes.func,
  show: PropTypes.bool,
  title: PropTypes.string,
};
