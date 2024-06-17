import React from "react";

export function InputSelect(props) {
  const multiple = props.multiple;
  const required = props.required || false;

  // symptom of selecting an empty value
  const emptySelected = multiple ? props.value?.length === 0 : !props.value;
  // symptom of object structured items
  const objectItems = props.enum ? false : true;

  return (
    <div className="form-group">
      <label>{props.label}:</label>
      <select
        required={required}
        className="browser-default form-select"
        multiple={multiple}
        name={props.name}
        onChange={props.handleChange}
        value={props.value}
      >
        {required ? (
          /* empty value disabled (for record editing) */
          <option disabled value={emptySelected}>
            {props.prompt}
          </option>
        ) : (
          /* empty value enabled (for overview filtering) */
          <option key={0} value={emptySelected}>
            ({props.prompt})
          </option>
        )}

        {objectItems
          ? /* rendering items as database objects (persons) */
            props.items.map((item, index) => (
              <option key={required ? index : index + 1} value={item._id}>
                {item.name}
              </option>
            ))
          : /* rendering items as enum values (genres) */
            props.items.map((item, index) => (
              <option key={required ? index : index + 1} value={item}>
                {props.enum[item]}
              </option>
            ))}
      </select>
    </div>
  );
}

export default InputSelect;
