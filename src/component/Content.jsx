import React from "react";
import styled from "styled-components";
import { RelativeTimeElement } from "@github/time-elements";

const ContentStyle = styled.div`
  border: 1px solid #d8dee4;
  padding: 16px;
  margin-top: -1px;
  list-style-type: none;
  border-top-color: #d8dee4;
  border-top-style: solid;
  margin: 0 15px;
`;
const Name = styled.a`
  font-size: 20px;
  font-weight: 600;
  color: blue;
  text-decoration: none;
`;
const Desc = styled.p`
  color: #57606a;
  padding: 10px 0;
`;
const Visibility = styled.span`
  color: #57606a;
  border: 1px solid #57606a;
  border-radius: 2em;
  padding: 0 7px;
  font-size: 12px;
  font-weight: 500;
  margin-left: 8px;
`;
const Topic = styled.span`
  display: inline-block;
  color: blue;
  padding: 2px 7px;
  border: 1px solid #ddf4ff;
  border-radius: 2em;
  font-weight: 500;
  background-color: #ddf4ff;
  padding-right: 16px;
  padding-left: 10px;
  margin: 0 0.125em 0.333em 0;
  &:hover {
    background-color: #0969da;
    color: #ffffff;
  }
`;

const ClearButton = styled.button`
  border: 0px;
  background-color: #ffffff;
  cursor: pointer;
`;
const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 16px;
`;
const Item = styled.div`
  padding-top: 4px;
  > span {
    padding-right: 20px;
  }
`;
const Content = ({
  filteredList,
  currentPage,
  selectedLang,
  selectedSort,
  handleFilterClear,
}) => {
  return (
    <div>
      {selectedLang !== "" && (
        <Filter>
          <span>
            {`${
              filteredList.length
            } results for all repositories written in ${selectedLang} ${
              selectedSort !== ""
                ? `sorted by ${
                    selectedSort === "updated" ? "최신 업데이트순" : "이름순"
                  }`
                : ""
            }
            `}
          </span>
          <ClearButton onClick={handleFilterClear}>
            ❎ Clear filter{" "}
          </ClearButton>
        </Filter>
      )}

      {filteredList
        .slice((currentPage - 1) * 10, currentPage * 10)
        .map((item) => {
          return (
            <ContentStyle key={item.name}>
              <ul style={{ listStyle: "none" }}>
                <li>
                  <div>
                    <h3>
                      <Name href={item.html_url}>{item.name}</Name>
                      <Visibility>{item.visibility}</Visibility>
                    </h3>
                    <Desc>{item.description}</Desc>
                  </div>
                  {item.topics.length ? (
                    item.topics.map((topic, idx) => {
                      return <Topic key={`${topic}_${idx}`}>{topic}</Topic>;
                    })
                  ) : (
                    <></>
                  )}
                  <Item>
                    <span>{item.language}</span>
                    <span>
                      {`⭐️`}
                      {item.stargazers_count}
                    </span>
                    <span>
                      Updated{" "}
                      <relative-time datetime={item.updated_at}></relative-time>
                    </span>
                  </Item>
                </li>
              </ul>
            </ContentStyle>
          );
        })}
    </div>
  );
};

export default Content;
