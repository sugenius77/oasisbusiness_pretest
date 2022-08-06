import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.div`
  background-color: #f6f8fa;
  border-bottom: 1px solid #d0d7e9;
  margin: 0 auto;
  min-height: 70px;
  padding: 10px 16px 0px 16px;
`;
const Title = styled.h1`
  font-weight: 600;
  > a {
    text-decoration: none;
    color: black;
    font-size: 20px;
  }
`;
const Img = styled.img`
  width: 30px;
  height: 30px;
  margin-top: -2px;
  margin-right: 8px;
  margin-bottom: -2px;
  border: solid 1px #d8dee4;
  border-radius: 6px;
  vertical-align: middle;
`;
const List = styled.ul`
  display: flex;
`;
const ListItem = styled.li`
  height: 50px;
  display: flex;
  align-items: center;
  margin-right: 15px;
`;

const FocusItem = styled(ListItem)`
  border-bottom: solid 2px orange;
`;
const Header = () => {
  return (
    <HeaderStyle>
      <Title>
        <a href="https://github.com/facebook">
          <Img src="https://avatars.githubusercontent.com/u/69631?s=60v=4" />
          Meta
        </a>
      </Title>
      <div>
        <List>
          <ListItem>Overview</ListItem>
          <FocusItem>Repositories</FocusItem>
        </List>
      </div>
    </HeaderStyle>
  );
};

export default Header;
