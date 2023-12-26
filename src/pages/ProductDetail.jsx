import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import useCart from "../api/useCart";
import PageTemplate from "../components/PageTemplate";
import styled from "styled-components";
import { Button, Dialog, DialogContent } from "@mui/material";

function ProductDetail(props) {
  const state = useLocation().state;
  const {
    id,
    image,
    title,
    price,
    caption,
    description,
    details: { usage, ingredients },
  } = state;

  const {
    cartInfo: { data: cartItem },
  } = useCart();

  const setPrice = parseInt(price).toLocaleString();

  const [success, setSuccess] = useState("");
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(1);

  const handleClose = () => {
    setOpen(false);
  };

  const { addItemCart } = useCart(); //addItemCart 불러오기

  const handleCartClick = () => {
    const product = { id, image, title, price, quantity: count };
    const existingCartItem = cartItem.find((item) => item.id === id);

    addItemCart.mutate(
      existingCartItem
        ? { ...existingCartItem, quantity: existingCartItem.quantity + count }
        : product,
      {
        onSuccess: () => {
          setOpen(true);
          setSuccess("장바구니에 상품이 추가되었습니다.");
          setCount(1);
        },
      }
    );
  };

  return (
    <PageTemplate>
      <DetailPageContainer>
        <TopContainer>
          <ImgBox>
            <img src={image} alt={title} />
          </ImgBox>
          <InfoBox>
            <Title>{title}</Title>
            <Caption>{caption}</Caption>

            <Description>{description}</Description>
            <Price>{setPrice}원</Price>
            <ButtonBox>
              <CartButton onClick={handleCartClick}>장바구니</CartButton>
              <OrderButton>구매하기</OrderButton>
            </ButtonBox>
          </InfoBox>
        </TopContainer>
        <BottomContainer>
          <DetailBox>
            <Usage>{usage}</Usage>
            <Ingredients>{ingredients}</Ingredients>
          </DetailBox>
        </BottomContainer>
      </DetailPageContainer>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>{success}</DialogContent>
        <Button onClick={handleClose} style={{ color: "#6d4a3ee5" }}>
          계속 쇼핑하기
        </Button>
        <Button href="/cart" style={{ color: "#6d4a3ee5" }}>
          장바구니 보기
        </Button>
      </Dialog>
    </PageTemplate>
  );
}

const DetailPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopContainer = styled.div`
  display: flex;
  padding-bottom: 20px;
  border-bottom: 1px solid #6c6c6c;
`;

const BottomContainer = styled.div`
  padding-top: 20px;
`;

const ImgBox = styled.div`
  flex: 1 0 40%;
  max-width: 40%;
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

const InfoBox = styled.div`
  flex: 1 0 60%;
  max-width: 60%;
  display: flex;
  flex-direction: column;
  position: relative;
  color: #222;
  padding-left: 30px;
`;

const Title = styled.h2`
  font-size: 28px;
  font-family: "Lora", serif;
  font-weight: 500;
  letter-spacing: 0.03em;
  margin-bottom: 10px;
`;

const Caption = styled.div`
  font-size: 18px;
  font-family: "Open Sans", sans-serif;
  margin-bottom: 50px;
`;

const Description = styled.div`
  margin-bottom: 32px;
  font-size: 16px;
  font-family: "Noto Sans KR", sans-serif;
  line-height: 24px;
`;

const Price = styled.div`
  margin-bottom: 10px;
  font-size: 16px;
  font-family: "Noto Sans KR", sans-serif;
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  margin-top: auto;
  gap: 20px;
`;

const ButtonStyled = styled.button`
  width: 50%;
  height: 50px;
  font-weight: bold;
  font-size: 18px;
  font-weight: 400;
  font-family: "Noto Sans KR", sans-serif;
  border-radius: 5px;
`;

const CartButton = styled(ButtonStyled)`
  color: white;
  background-color: #6d4a3ee5;
  border: none;
`;

const OrderButton = styled(ButtonStyled)`
  color: #6d4a3ee5;
  background-color: transparent;
  border: 1px solid #6d4a3ee5;
`;

const DetailBox = styled.div`
  //   flex-basis: 100%;
`;

const Usage = styled.div``;
const Ingredients = styled.div``;

export default ProductDetail;
