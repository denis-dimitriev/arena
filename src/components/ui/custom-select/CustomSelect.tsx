import React, { HTMLProps } from "react";

interface CustomSelectProps extends HTMLProps<HTMLSelectElement> {
  arrayToMap?: Array<string>;
  label?: string;
  name?: string;
  onChange?: () => {};
  required?: boolean;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  arrayToMap,
  onChange,
  name,
  required,
}) => {
  return (
    <>
      <label htmlFor={name}>{label}*</label>
      <select name={name} id={name} onChange={onChange} required={required}>
        <option value="">--</option>
        {arrayToMap?.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
};
