import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategoryProduct } from "../api/firebase";
import CategoryProductList from "../components/CategoryProductList";
import PageTemplate from "../components/PageTemplate";

function CategoryPage(props) {
  const [product, setProduct] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    getCategoryProduct(category)
      .then((products) => {
        setProduct(products);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [category]); // 빈 배열이 아닌 카테고리

  return (
    <PageTemplate>
      <CategoryProductList category={category} product={product} />
    </PageTemplate>
  );
}

export default CategoryPage;
