import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MainBg03 } from "../assets";
import "swiper/css";

function BestProduct(props) {
  return (
    <BestProductSection className="best-product">
      <h3 className="title">Best Product</h3>
      <div className="product-contents">
        <div className="content-title">
          <div className="description">
            For your Face Revial
            <br />
            자연의 천연원료로 제조된
            <br />
            특허 전성분을 원료를 확인하세요
          </div>
          <Link to="/all" className="link-btn">
            MORE PRODUCT
          </Link>
        </div>
      </div>
    </BestProductSection>
  );
}

const BestProductSection = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background-image: url(${MainBg03});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 200px 118px 188px 118px;
  .title {
    font-size: 10vw;
    font-weight: 400;
    font-family: "Lora", serif;
    color: #b99082;
    text-align: left;
  }
  .description {
    font-size: 24px;
    color: rgba(255, 255, 255, 0.85);
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 400;
    /* margin-top: 86px; */
    line-height: 36px;
  }
  .link-btn {
    color: rgba(255, 255, 255, 0.6);
    &:after {
      background: rgba(255, 255, 255, 0.74);
    }
    &:hover:before {
      background: rgba(255, 255, 255, 0.74);
    }
  }
`;

export default BestProduct;
