import React from "react";
import useCart from "../api/useCart";
import PageTemplate from "../components/PageTemplate";
import styled from "styled-components";
import CartItem from "../components/CartItem";

function Cart(props) {
  const {
    cartInfo: { data: products },
  } = useCart();
  const isItem = products && products.length > 0; //0보다 크다 = 무조건 하나는 있다.
  const delivery = 3000;

  const totalPrice =
    products &&
    products.reduce(
      (prev, current) => prev + parseInt(current.price) * current.quantity,
      0
    ); //.toLocaleString();
    
  return (
    <PageTemplate>
      <CartContainer>
        <Title>My Cart</Title>
        {!isItem && <p>장바구니에 상품이 없습니다.</p>}

        {isItem && (
          <CartList>
            {products &&
              products.map((product, index) => (
                <CartItem key={product.id} product={product} index={index} />
              ))}
          </CartList>
        )}

        <PriceContainer>
          <p className="totalPrice">전체 금액 : {totalPrice}원</p>
          <p className="deliveryPrice">배송비 : {delivery}원</p>
          <p>총 주문 금액 : {totalPrice + delivery}원</p>
        </PriceContainer>
      </CartContainer>
    </PageTemplate>
  );
}
const CartContainer = styled.div`
  padding: 5px 45px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 30px;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  border-bottom: solid 1px #222;
  padding-bottom: 16px;
`;

const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-top: solid 1px #ddd;
  padding: 24px 0;
  & > li {
    display: flex;
    align-items: center;
    border-bottom: solid 1px #ddd;
    padding: 12px 0;
    gap: 12px;
  }
  img {
    width: 100px;
    display: block;
  }
`;

const PriceContainer = styled.div``;
export default Cart;

/*
.cartList{
	display: flex;
	flex-direction: column;
	gap: 20px;
	border-top: solid 1px #ddd;
	padding: 24px 0;
	li{
	display: flex;
	align-items: center;
	border-bottom: solid 1px #ddd;
	padding: 12px 0;
	gap: 12px;
	img{
		width: 100px;
		display: block;
	}
}
}
*/
