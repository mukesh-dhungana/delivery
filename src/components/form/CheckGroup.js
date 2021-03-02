import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import isEmpty from "../../isEmpty";

function CheckGroup({
  name,
  value,
  error,
  label,
  checked,
  className,
  onChange,
  labelPosition,
  disabled
}) {
  var inputclass = classnames({
    "custom-check": true,
    error: !isEmpty(error) && error,
    [className]: className,
    // [size]:size,
    "label-right": labelPosition === "right"
  });
  return (
    <label className={inputclass}>
      <span>{label}</span>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        value={value}
        disabled={disabled}
      />
      <div className="checkmark"></div>
    </label>
  );
}

CheckGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  error: PropTypes.string,
  labelPosition: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};
CheckGroup.defaultProps = {
  labelPosition: "right"
};

export default CheckGroup;
