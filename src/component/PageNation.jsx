import React from "react";
import styled from "styled-components";
const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  border: 0px;
  outline: 0px;
  background-color: white;
  cursor: pointer;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  height: 50px;
`;

const ListItem = styled.li`
  margin-right: 5px;
  font-size: 1.4em;
  cursor: pointer;
  color: ${(props) => (props.active ? "blue" : "black")};
`;

const PageNation = ({ filteredList, currentPage, handlePageChange }) => {
  return (
    <Page>
      <Button
        disabled={currentPage === 1 ? true : false}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        {`< Previous`}
      </Button>
      <List>
        {new Array(Math.ceil(filteredList.length / 10))
          .fill(0)
          .map((v, idx) => {
            return (
              <ListItem
                active={currentPage === idx + 1}
                key={`page_${idx}`}
                onClick={() => handlePageChange(idx + 1)}
              >
                {idx + 1}
              </ListItem>
            );
          })}
      </List>
      <Button
        disabled={currentPage === Math.ceil(filteredList.length / 10)}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        {`Next >`}
      </Button>
    </Page>
  );
};

export default PageNation;
