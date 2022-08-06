import React from "react";
import styled from "styled-components";

const Select = styled.select`
  border-radius: 6px;
  color: #000000;
  border: 1px solid #d8dee4;
  background-color: #f6f8fa;
  font-weight: 500;
  margin-right: 13px;
`;

const SelectBox = (props) => {
  return (
    <Select value={props.value} onChange={props.handleChange}>
      {props.options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </Select>
  );
};

export default SelectBox;
