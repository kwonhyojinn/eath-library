import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import useCart from "../api/useCart";
import PageTemplate from "../components/PageTemplate";
import styled from "styled-components";

function ProductDetail(props) {
  const state = useLocation().state;
  console.log(state);
  const { id, image, title, price, caption, description } = state;
  const setPrice = parseInt(price).toLocaleString();

  const [success, setSuccess] = useState();

  const { addItemCart } = useCart(); //addItemCart 불러오기
  // const cartItem = () => {
  //   const product = { id, image, title, price, quantity: 1 };
  //   //quantity = 1 수량 체크
  //   addItemCart.mutate(product, {
  //     onSuccess: () => {
  //       setSuccess("장바구니에 상품이 추가되었습니다.");
  //     },
  //   });
  // };

  return (
    <PageTemplate>
      <DetailPageContainer>
        <DetailImgBox>
          <img src={image} alt={title} />
        </DetailImgBox>
        <ContentBox>
          <Title>{title}</Title>
          <CaptionBox>{caption}</CaptionBox>

          <ContentBottom>
            <DescriptionBox>{description}</DescriptionBox>
            <PriceBox>{setPrice}원</PriceBox>
            <BtnBox>
              <CartBtn>장바구니</CartBtn>
            </BtnBox>
          </ContentBottom>
        </ContentBox>
      </DetailPageContainer>
    </PageTemplate>
  );
}

const DetailPageContainer = styled.div`
  padding: 5px 45px;
  display: flex;
`;

const DetailImgBox = styled.div`
  width: calc(50vw - 110px);
  height: calc(50vw - 110px);
  background-color: #eeede5;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  img {
    width: 100%;
    display: block;
  }
`;

const ContentBox = styled.div`
  flex: 1;
  margin-left: 5%;
  max-width: 530px;
  position: relative;
  color: #222;
`;

const Title = styled.h2`
  font-size: 28px;
  font-family: "Lora", serif;
  font-weight: 500;
  letter-spacing: 0.03em;
  padding-bottom: 10px;
`;
const CaptionBox = styled.div`
  font-size: 18px;
  margin-top: 5px;
  font-family: "Open Sans", sans-serif;
`;

const ContentBottom = styled.div`
  position: static;
`;
const DescriptionBox = styled.div`
  margin-top: 50px;
  font-size: 16px;
  font-family: "Noto Sans KR", sans-serif;
  line-height: 24px;
`;

const PriceBox = styled.div`
  margin-top: 32px;
  font-size: 16px;
  font-family: "Noto Sans KR", sans-serif;
`;

const BtnBox = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;

const CartBtn = styled.button`
  height: 50px;
  font-weight: bold;
  font-size: 18px;
  font-weight: 400;
  font-family: "Noto Sans KR", sans-serif;
  color: white;
  background-color: #6d4a3ee5;
  border: none;
  border-radius: 5px;
`;
export default ProductDetail;
