import React from "react";
import CategoryListItem from "./CategoryListItem";
import styled from "styled-components";
import ProductItem from "./ProductItem";

function CategoryProductList({ category, product }) {
  return (
    <CategoryList>
      {product &&
        product.map((item) => <ProductItem key={item.id} product={item} />)}
    </CategoryList>
  );
}

const CategoryTitle = styled.h2`
  font-size: 20px;
  padding: 24px 0 100px;
  font-weight: normal;
`;

const CategoryList = styled.ul`
  display: flex;
  gap: 24px 5%;
  flex-wrap: wrap;
  & > li {
    flex-shrink: 0;
    flex-basis: 30%;
  }
`;

export default CategoryProductList;
