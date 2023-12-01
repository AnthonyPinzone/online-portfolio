import PropTypes from 'prop-types';

export function Input({
  className = '',
  label,
  type,
  id,
  name,
  placeholder,
  required = false,
  cols = 30,
  rows = 5,
  value,
  onChange,
}) {
  return (
    <div className={`form-field ${className}`}>
      <div className="form-field__label">
        <label htmlFor={id}>{label}</label>
      </div>
      {type === 'textarea' ? (
        <textarea
          name={name}
          id={id}
          cols={cols}
          rows={rows}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}

Input.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.oneOf([
    'text',
    'email',
    'number',
    'password',
    'tel',
    'url',
    'textarea',
  ]),
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  cols: PropTypes.number,
  rows: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
};
