import React, { useState } from "react";
import PageTemplate from "../components/PageTemplate";
import styled from "styled-components";
import { Button } from "@mui/material";
import { searchProduct } from "../api/firebase";
import ProductItem from "../components/ProductItem";

function Search(props) {
  const [text, setText] = useState("");
  const [searchedItem, setSearchedItem] = useState([]);

  const handleSearchChange = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setText(e.target.value);
      handleSearchClick();
    }
  };

  const handleSearchClick = () => {
    if (text.trim === "") {
      setSearchedItem([]);
    } else {
      searchProduct(text)
        .then((item) => {
          setSearchedItem(item);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <PageTemplate>
      <SearchContainer>
        <SearchBox>
          <SearchInput
            type="text"
            placeholder="상품명을 입력하세요."
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
            value={text}
          />
          <Button
            variant="contained"
            style={{ background: "#b99082", width: 64, marginLeft: 30 }}
            onClick={handleSearchClick}
          >
            검색
          </Button>
        </SearchBox>
        <SearchList>
          {searchedItem &&
            searchedItem.map((item) => (
              <ProductItem key={item.id} product={item} />
            ))}
        </SearchList>
      </SearchContainer>
    </PageTemplate>
  );
}

const SearchContainer = styled.div`
  width: 100%;
`;

const SearchBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const SearchInput = styled.input`
  flex: 1;
`;

const SearchList = styled.ul`
  display: flex;
  gap: 24px 5%;
  flex-wrap: wrap;
  margin-left: 30px;
`;

export default Search;
