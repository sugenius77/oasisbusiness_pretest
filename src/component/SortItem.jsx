import React from "react";
import styled from "styled-components";
import SelectBox from "./SelectBox";

const SortItems = styled.div`
  display: flex;
  padding: 16px 0px;
  margin: 0 15px;
`;
const InputBox = styled.input`
  width: 400px;
  font-size: 16px;
  padding: 5px 12px;
  border-radius: 6px;
  border: 1px solid #d8dee4;
  margin-right: 13px;
`;
const SortList = [
  { value: "", name: "Sort" },
  { value: "updated", name: "최신 업데이트순" },
  { value: "full_name", name: "이름순" },
];

const Language = [
  { value: "", name: "Language" },
  { value: "C++", name: "C++" },
  { value: "JavaScript", name: "JavaScript" },
  { value: "TypeScript", name: "TypeScript" },
  { value: "Java", name: "Java" },
];

const SortItem = ({
  selectedLang,
  selectedSort,
  handleLangChange,
  handleInputChange,
  handleSortChange,
}) => {
  return (
    <SortItems>
      <InputBox
        placeholder="🔍 Find a repository..."
        onChange={handleInputChange}
      />
      <SelectBox
        value={selectedLang}
        options={Language}
        handleChange={handleLangChange}
      ></SelectBox>
      <SelectBox
        value={selectedSort}
        options={SortList}
        handleChange={handleSortChange}
      ></SelectBox>
    </SortItems>
  );
};

export default SortItem;
