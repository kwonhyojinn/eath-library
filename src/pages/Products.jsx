import React from "react";
import PageTemplate from "../components/PageTemplate";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/firebase";
import ProductItem from "../components/ProductItem";
import styled from "styled-components";

function Products(props) {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return (
    <PageTemplate>
      {isLoading && <p>상품 정보를 업데이트 중입니다.</p>}
      {error && <p>상품 정보를 불러올 수 없습니다.</p>}

      <ProductList>
        {products &&
          products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
      </ProductList>
    </PageTemplate>
  );
}

const ProductList = styled.ul`
  display: flex;
  gap: 24px 5%;
  flex-wrap: wrap;
`;

export default Products;
