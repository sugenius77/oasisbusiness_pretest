import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";

import styled from "styled-components";
import Header from "./component/Header";
import PageNation from "./component/PageNation";
import Content from "./component/Content";
import SortItem from "./component/SortItem";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1024px;
`;

function App() {
  const [totalData, setTotalData] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedLang, setSelectedLang] = useState(localStorage.lang || "");
  const [selectedSort, setSelectedSort] = useState(localStorage.sort || "");
  const [direction, setDirection] = useState(localStorage.direction || "");
  const [currentPage, setCurrentPage] = useState(1);

  const handleLangChange = (e) => {
    localStorage.setItem("lang", e.target.value);
    setSelectedLang(e.target.value);
  };
  const handleInputChange = _.debounce((e) => {
    setSearch(e.target.value);
  }, 500);

  const handleSortChange = (e) => {
    localStorage.setItem("sort", e.target.value);
    setSelectedSort(e.target.value);
    setCurrentPage(1);
    if (e.target.value === "full_name") {
      localStorage.setItem("direction", "asc");
      setDirection("asc");
    }
  };

  const getData = async () => {
    try {
      const res = await axios.get(
        `https://api.github.com/orgs/facebook/repos?sort=${selectedSort}&direction=${direction}&per_page=40&page=1`
      );
      setTotalData(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleFilterClear = () => {
    localStorage.setItem("lang", "");
    localStorage.setItem("sort", "");
    setSelectedLang("");
    setSelectedSort("");
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    getData();
  }, [selectedSort, direction]);

  const filteredList = totalData.length
    ? totalData
        .filter((obj) => {
          return obj.name.toLowerCase().includes(search.toLowerCase());
        })
        .filter((obj) => {
          if (selectedLang === "") {
            return true;
          } else {
            return selectedLang === obj.language;
          }
        })
    : [];

  return (
    <Container>
      <Header />
      <SortItem
        selectedLang={selectedLang}
        selectedSort={selectedSort}
        handleInputChange={handleInputChange}
        handleSortChange={handleSortChange}
        handleLangChange={handleLangChange}
      />
      <Content
        filteredList={filteredList}
        currentPage={currentPage}
        handleFilterClear={handleFilterClear}
        selectedLang={selectedLang}
        selectedSort={selectedSort}
      />
      <PageNation
        filteredList={filteredList}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </Container>
  );
}

export default App;
