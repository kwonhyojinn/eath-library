import React from "react";
import styled from "styled-components";
import { LogoWide } from "../assets";
function Footer(props) {
  return (
    <FooterContent>
      <div className="logo">
        <img src={LogoWide} alt="로고" />
      </div>

      <div className="text-contents">
        <div className="text-left">
          <p>주식회사 이스라이브러리 | 대표 : 장동훈</p>
          <p>
            사업자등록번호 : 521-88-01163 | 통신판매번호 : 2022-서울강남-03179
          </p>
          <p>
            주소 : 서울특별시 강남구 도산대로 17길 31 1층 | 매장 주소 : 06033
          </p>
          <p>제품문의 : 02-723-7001 | E-mail : contact@eathlibrary.com</p>
        </div>

        <div className="text-right">
          <p>Tel : 02-723-7001</p>
          <p>Mon to Fri : 11:00 AM - 7:00 PM</p>
          <p>Sat to Sun : 12:00 PM - 7:30 PM</p>
        </div>
      </div>

      <div className="text-bottom">
        <p>Copyright © 2022 주식회사 이스라이브러리 All right reserved.</p>
        <div className="social">
          <a href="#">Instagram</a>
          <a href="#">kakao</a>
          <a href="#">Facebook</a>
        </div>
      </div>
    </FooterContent>
  );
}
const FooterContent = styled.footer`
  width: 100%;
  height: auto;
  padding: 84px 118px 84px 118px;
  background: #eeede5;
  img {
    width: auto;
  }

  .text-contents {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    position: relative;
    align-items: flex-end;
    top: 76px;
  }
  .text-left {
    width: 50%;
    font-size: 16px;
    color: #484848;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 400;
    line-height: 28px;
  }
  .text-right {
    width: 50%;
    font-size: 16px;
    color: #484848;
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    line-height: 28px;
    text-align: right;
  }
  .text-bottom {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 178px;
    p {
      font-size: 16px;
      color: #9c9c9c;
      font-family: "Open Sans", sans-serif;
      font-weight: 400;
    }
  }
  .social a {
    text-decoration: none;
    font-size: 16px;
    color: #484848;
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    margin-left: 36px;
  }
`;
export default Footer;
