import React from "react";

export function InputField(props) {
  // supported types for element input
  const INPUTS = ["text", "number", "date"];

  // validation of element and type
  const type = props.type.toLowerCase();
  const isTextarea = type === "textarea";
  const required = props.required || false;

  if (!isTextarea && !INPUTS.includes(type)) {
    return null;
  }

  // assigning minimum value to the attribute of a relevant type
  const minProp = props.min || null;
  const min = ["number", "date"].includes(type) ? minProp : null;
  const minlength = ["text", "textarea"].includes(type) ? minProp : null;

  return (
    <div className="form-group">
      <label>{props.label}:</label>

      {/* current element render*/}
      {isTextarea ? (
        <textarea
          required={required}
          className="form-control"
          placeholder={props.prompt}
          rows={props.rows}
          minLength={minlength}
          name={props.name}
          value={props.value}
          onChange={props.handleChange}
        />
      ) : (
        <input
          required={required}
          type={type}
          className="form-control"
          placeholder={props.prompt}
          minLength={minlength}
          min={min}
          name={props.name}
          value={props.value}
          onChange={props.handleChange}
        />
      )}
    </div>
  );
}

export default InputField;
