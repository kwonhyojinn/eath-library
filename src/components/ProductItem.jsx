import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function ProductItem({
  product: { id, image, title, price, caption, category, description, details },
}) {
  const setPrice = parseInt(price).toLocaleString();

  return (
    <ProductItemContainer>
      <ProductItemBox
        to={`/products/${category}/${id}`}
        state={{
          title: title,
          id: id,
          image: image,
          price: price,
          caption: caption,
          category: category,
          description: description,
          details: details,
        }}
      >
        <img src={image} alt={title} />
        <ContentBox>
          <TitleBox>
            <h3>{title}</h3>
            <p>{caption}</p>
          </TitleBox>
          <PriceBox>{setPrice} 원</PriceBox>
        </ContentBox>
      </ProductItemBox>
    </ProductItemContainer>
  );
}

const ProductItemContainer = styled.li`
  flex-shrink: 0;
  flex-basis: 30%;
`;

const ProductItemBox = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TitleBox = styled.div`
  text-align: center;
  line-height: 24px;
`;

const PriceBox = styled.div`
  text-align: center;
  line-height: 24px;
`;

export default ProductItem;
