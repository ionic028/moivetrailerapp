/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

export const Dropdown = ({ title, options, func }) => {
  return (
    <div className="select ">
      <select onChange={func} defaultValue="0" name="format" id="format">
        <option value="0" disabled>
          {title}
        </option>
        {options.map((o, i) => (
          <option key={i} value={o}>
            {o.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};
