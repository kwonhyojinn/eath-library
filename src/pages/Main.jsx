import React from "react";
import styled from "styled-components";
import { MainBg01 } from "../assets";
import NewProduct from "./NewProduct";
import BestProduct from "./BestProduct";
import ReadingRoom from "./ReadingRoom";

function Main(props) {
  return (
    <div className="">
      <img src={MainBg01} />
      <IntroduceSection className="introduce">
        <div className="introduce-contents">
          <p className="eath-library">
            <span>EATH</span>
            <span>Library</span>
          </p>
          <h3 className="title">Skin-health-Care</h3>
          <div className="description">
            <p>
              불면의 밤을 위한 처방, 한 잔의 한방차가 피부에 놀라운 변화를
              선사했고, 이스라이브러리의 시작이 되었습니다.
            </p>
            <p>
              이스라이브러리는 피부 재생력 활성화 플랜을 선사하여 피부 스스로
              회복하고, <br /> 스스로 재생할 수 있는 환경을 조성하게 합니다.
            </p>
          </div>
        </div>
      </IntroduceSection>
      <NewProduct />
      <BestProduct />
      <ReadingRoom />
    </div>
  );
}

const IntroduceSection = styled.div`
  height: 600px;
  .introduce-contents {
    padding-top: 117px;
    text-align: center;
    .eath-library {
      font-size: 24px;
      color: #222;
      span {
        font-weight: 500;
        margin: 0 4px;
        &:nth-child(1) {
          font-family: "Lora", serif;
        }
      }
    }
    .title {
      font-size: 70px;
      font-weight: 400;
      margin-top: 26px;
      font-family: "Lora", serif;
    }
    .description > p:nth-child(1) {
      font-size: 26px;
      color: #222;
      font-weight: 500;
      margin-top: 94px;
    }
    .description > p:nth-child(2) {
      font-size: 23px;
      color: #484848;
      font-weight: 400;
      margin: 26px 0 120px 0;
      line-height: 40px;
      white-space: pre-wrap;
    }
    .more-view {
      font-size: 16px;
      color: #9c9c9c;
      font-family: "Open Sans";
      font-weight: 400;
      text-decoration: none;
      justify-content: center;
      display: inline-block;
      position: relative;
      padding-bottom: 6px;
      &:hover {
        color: rgba(156, 156, 156, 0.6);
      }
      &::after,
      &::before {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        bottom: 0;
        height: 1px;
        width: 100%;
        transition: width 0s ease;
      }
      &:after {
        background: #9c9c9c;
      }
      &:hover:before {
        width: 0%;
        background: #9c9c9c;
        transition: width 0.5s ease;
      }
      &:hover:after {
        width: 0%;
        background: transparent;
        transition: width 0s ease;
      }
    }
  }
`;

export default Main;
