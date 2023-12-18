import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Room01, Room02, Room03 } from "../assets";
import SlideContent from "../components/SlideContent";

function ReadingRoom(props) {
  return (
    <ReadingRoomSection className="reading-room">
      <h3 className="title">Reading Room</h3>
      <div className="product-contents">{/* <SlideContent /> */}</div>

      <div className="text">
        <p className="description">
          고즈넉한 북촌 한옥 마을 한켠에 위치한 이스라이브러리의 Reading Room은
          <br />
          브랜드의 아카이빙 장소이자 한의학을 비롯한 한국 전통문화에 대한 많은
          책을 접할 수 있는 장소입니다.
        </p>
        <Link to="/all" className="link-btn">
          MORE PRODUCT
        </Link>
      </div>
    </ReadingRoomSection>
  );
}

const ReadingRoomSection = styled.section`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 200px 118px;
  .title {
    font-size: 10vw;
    font-weight: 400;
    font-family: "Lora", serif;
    color: #6d4a3ee5;
    text-align: center;
  }
  .text {
    text-align: center;
    position: relative;
    top: 78px;
  }
  .description {
    font-size: 28px;
    line-height: 49px;
    color: #484848;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 400;
  }
`;

export default ReadingRoom;
