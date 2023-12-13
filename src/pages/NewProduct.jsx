import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MainBg02, Article01, Article02, Article03 } from "../assets";

function NewProduct(props) {
  return (
    <NewProductSection className="new-product">
      <h3 className="title">What's New</h3>
      <div className="product-contents">
        <div className="content-title">
          <div className="description">
            본질적인 건강한 아름다움,
            <br />
            고귀한 자연의 생명력과 치유력으로
            <br />
            빛나는 피부를 만끽하세요
          </div>
          <Link to="/all" className="link-btn">
            MORE PRODUCT
          </Link>
        </div>
        <div className="item-show">
          <div className="item-img">
            <a href="#">
              <img src={Article01} alt="item" className="img" />
              <div className="item-hover">
                <div className="item-text">
                  <p className="item-title">
                    MOON LIGHT
                    <br />
                    GARDEN
                  </p>
                  <p className="item-category">Nourshing Hand Wash</p>
                  <p className="item-price">2,4000원</p>
                </div>
              </div>
            </a>
          </div>
          <div className="item-img">
            <a href="#">
              <img src={Article02} alt="item" className="img" />
              <div className="item-hover">
                <div className="item-text">
                  <p className="item-title">
                    SMOOTH
                    <br />
                    OPERATER
                  </p>
                  <p className="item-category">Purifying Cleanser Gel</p>
                  <p className="item-price">3,6000원</p>
                </div>
              </div>
            </a>
          </div>
          <div className="item-img">
            <a href="#">
              <img src={Article03} alt="item" className="img" />
              <div className="item-hover">
                <div className="item-text">
                  <p className="item-title">
                    WISE
                    <br />
                    AWAKEING
                  </p>
                  <p className="item-category">Advanced Nourishing Toner</p>
                  <p className="item-price">4,8000원</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </NewProductSection>
  );
}

const NewProductSection = styled.div`
  background-image: url(${MainBg02});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 200px 118px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  .title {
    font-size: 10vw;
    font-weight: 400;
    font-family: "Lora", serif;
    color: #6d4a3ee5;
    text-align: right;
  }
  .content-title {
    flex: 0 350px;
    width: 350px;
    height: 100%;
    margin-bottom: 30px;
  }
  .description {
    font-size: 24px;
    color: #484848c1;
    font-family: "Noto Sans KR";
    font-weight: 400;
    line-height: 36px;
  }
  .item-show {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-around;
    gap: 40px;
  }
  .item-img {
    position: relative;
    display: inline-block;
  }
  .img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  .item-img:hover .img {
    opacity: 0; /* 이미지는 숨기기 */
  }
  .item-img:hover .item-hover {
    opacity: 1; /* 호버 시 item-hover 나타나도록 설정 */
  }
  .item-hover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 17px;
  }
  .item-hover:hover {
    opacity: 1;
  }
  .item-text {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    & > p {
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  .item-title {
    font-size: 46px;
    text-align: center;
    color: #222;
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    line-height: 58px;
    @media only screen and (max-width: 1280px) {
      font-size: 30px;
      line-height: 32px;
    }
    @media only screen and (max-width: 1024px) {
      font-size: 24px;
      line-height: 28px;
    }
    @media only screen and (max-width: 768px) {
      font-size: 16px;
      line-height: 20px;
    }
  }
  .item-category {
    font-size: 24px;
    color: #6c6c6c;
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    @media only screen and (max-width: 1280px) {
      font-size: 20px;
      line-height: 24px;
    }
    @media only screen and (max-width: 1024px) {
      font-size: 18px;
      line-height: 20px;
    }
    @media only screen and (max-width: 768px) {
      font-size: 14px;
      line-height: 16px;
    }
  }
  .item-price {
    font-size: 18px;
    color: #484848;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 400;
    @media only screen and (max-width: 1024px) {
      font-size: 16px;
    }
    @media only screen and (max-width: 768px) {
      font-size: 12px;
    }
  }
`;

export default NewProduct;
