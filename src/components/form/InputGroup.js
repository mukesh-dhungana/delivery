import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import isEmpty from "../../isEmpty";

const InputGroup = ({
  tag,
  name,
  placeholder,
  value,
  error,
  required,
  label,
  showLabel,
  type,
  onChange,
  size,
  handleBlur,
  className,
  width,
  disabled,
  minValue,
  maxValue,
  autoFocus,
  validators,
  onKeyUp,
}) => {
  var inputclass = classnames({
    "form-group": true,
    error: !isEmpty(error) && error,
    [className]: className,
    [size]: size,
  });

  return (
    <div className={inputclass} style={{ width }}>
      {label
        ? showLabel && (
            <label htmlFor={name} className="form-group__label">
              {label} {required ? " *" : ""}
            </label>
          )
        : null}
      <div className="form-group__outer">
        {tag === "textarea" ? (
          <textarea
            className="form-group__input"
            placeholder={placeholder}
            value={value}
            type={type}
            name={name}
            id={name}
            validators={validators}
            onBlur={handleBlur}
            onChange={onChange}
            disabled={disabled}
          />
        ) : (
          <input
            className="form-group__input"
            placeholder={placeholder}
            value={value}
            type={type}
            name={name}
            id={name}
            validators={validators}
            onBlur={handleBlur}
            onChange={onChange}
            disabled={disabled}
            min={minValue}
            max={maxValue}
            autoFocus={autoFocus}
            onKeyUp={onKeyUp}
          />
        )}
      </div>

      {error && <div className="form-group__message">{error}</div>}
    </div>
  );
};

InputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.any.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
  size: PropTypes.string,
  error: PropTypes.any,
  width: PropTypes.string,
  label: PropTypes.string,
  showLabel: PropTypes.bool,
  handleBlur: PropTypes.func,
  validators: PropTypes.array,
  //onChange:PropTypes.func.isRequired,
};
InputGroup.defaultProps = {
  type: "text",
  tag: "input",
  showLabel: true,
  required: false,
  name: "",
  validators: null,
};

export default InputGroup;
