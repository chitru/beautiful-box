import React from "react";

const FormItems = ({ label, children, type, ...otherProps }) => (
  <div>
    {type === "text" || type === "number" ? (
      <>
        <label>{label}</label>
        <input type={type} {...otherProps} />
      </>
    ) : (
      <>
        {label}
        <input type={type} {...otherProps} />
      </>
    )}
  </div>
);

export default FormItems;
