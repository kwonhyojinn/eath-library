import React from "react";
import { getProducts } from "../api/firebase";
import { useQuery } from "@tanstack/react-query";
import { NavLink, useLocation, useMatch, useParams } from "react-router-dom";
import styled from "styled-components";

const CATEGORIES = ["Facial", "Hand", "Life Style"];

function CategoryList(props) {
  const { pathname } = useLocation();

  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const activeClass = pathname === "/products" ? true : false;

  const setCategory = new Set();
  //특정한 값을 배열로 출력해 줄 때 중복요소를 걸러준다.

  if (products) {
    products.forEach((categoryObj) => {
      setCategory.add(categoryObj.category);
      //add 배열에 추가하는 메서드
    });
  }
  const setCategoryArr = [...setCategory];

  return (
    <CategoryItemList>
      <CategoryItem>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive && activeClass ? "isActive" : undefined
          }
        >
          All
        </NavLink>
      </CategoryItem>
      {setCategoryArr.map((category, index) => (
        <CategoryItem key={index}>
          <NavLink
            to={`/products/${category}`}
            className={({ isActive }) => (isActive ? "isActive" : undefined)}
          >
            {CATEGORIES[index]}
          </NavLink>
        </CategoryItem>
      ))}
    </CategoryItemList>
  );
}

export default CategoryList;
const CategoryItemList = styled.ul`
  display: flex;
  gap: 30px;
  padding: 24px;
`;

const CategoryItem = styled.li`
  & > a {
    font-size: 18px;
    color: #222;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.18s;
  }
  .isActive {
    color: #b99082;
  }
`;
