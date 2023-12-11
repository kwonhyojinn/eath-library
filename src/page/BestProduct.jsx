import React from 'react';
import styled from 'styled-components';
import { BackGround, Article01, Article02, Article03, Article04 } from '../assets';

function BestProduct(props) {
    return (
        <ProductSection className='best-product'>
            <h3 className='title'>Best Product</h3>
            <div class="product-contents">
                <div class="content-title">
                    <div class="description">
                        본질적인 건강한 아름다움,
                        <br />
                        고귀한 자연의 생명력과 치유력으로
                        <br />
                        빛나는 피부를 만끽하세요
                    </div>

                    <div class="link">
                        <a href="#">MORE PRODUCT</a>
                    </div>
                </div>
                <div class="item-show">
                    <div class="item-img">
                        <a href="#">
                            <img src={Article01} alt='item' />
                            <div class="item-hover">
                                <div class="item-text">
                                    <p class="item-title">
                                        MOON LIGHT<br />
                                        GARDEN
                                    </p>
                                    <p class="item-category">
                                        Nourshing Hand Wash
                                    </p>
                                    <p class="item-price">
                                        2,4000원
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="item-img">
                        <a href="#">
                            <img src={Article02} alt='item' />
                            <div class="item-hover">
                                <div class="item-text">
                                    <p class="item-title">
                                        SMOOTH<br />
                                        OPERATER
                                    </p>
                                    <p class="item-category">
                                        Purifying Cleanser Gel
                                    </p>
                                    <p class="item-price">
                                        3,6000원
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="item-img">
                        <a href="#">
                            <img src={Article03} alt='item' />
                            <div class="item-hover">
                                <div class="item-text">
                                    <p class="item-title">
                                        WISE<br />
                                        AWAKEING
                                    </p>
                                    <p class="item-category">
                                        Advanced Nourishing Toner
                                    </p>
                                    <p class="item-price">
                                        4,8000원
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

        </ProductSection>
    );
}

const ProductSection = styled.div`
    background-image: url(${BackGround});
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
        font-size: 12vw;
        font-weight: 400;
        font-family: 'Lora', serif;
        color: #6d4a3e;
        text-align: right;
    }
    .product-contents {
        display: flex;
        flex-direction: column;
        position: relative;
        max-width: 1280px;
        width: 100%;
        margin: 0 auto;
        margin-top: 70px;
    }
    .content-title {
        flex: 0 350px;
        width: 350px;
        height: 100%;
    }
    .description {
        font-size: 24px;
        color: #484848;
        font-family: 'Noto Sans KR';
        font-weight: 500;
        line-height: 49px;
    }
    .link {
        margin-top: 50px;
        a {
            position: relative;
            display: inline-block;
            padding-bottom: 6px;
            font-size: 18px;
            color: #6c6c6c;
            font-family: 'Open Sans', sans-serif;
            text-align: left;
            text-decoration: none;
            &:before {
                content: '';
                display: block;
                position: absolute;
                left: 0;
                bottom: 0;
                height: 1px;
                width: 100%;
                transition: width 0s ease;
            }
            &:after {
                content: '';
                display: block;
                position: absolute;
                right: 0;
                bottom: 0;
                height: 1px;
                width: 100%;
                background: #6c6c6c;
                transition: width .5s ease;
            }
            &:hover:before {
                width: 0%;
                background: #6c6c6c;
                transition: width .5s ease;
            }
            &:hover:after {
                width: 0%;
                background: transparent;
                transition: width 0s ease;
            }
        }
    }
    .item-show {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-content: space-around;
        gap: 40px;
        & > div:hover a > img {
            display: none;
        }
        & > div:hover .item-hover {
            display: block;
        }
    }
    .item-hover {
        width: 100%;
        height: 100%;
        background: #fff;
        box-sizing: border-box;
        text-align: center;
        border-radius: 17px;
        justify-content: center;
        z-index: 10;
        transition: 1s;
        display: none;
    }
    .item-text {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .item-title {
        font-size: 50px;
        color: #222;
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
        line-height: 60px;
        @media only screen and (max-width: 1300px) {
            font-size: 30px;
            line-height: 30px;
        }
        @media only screen and (max-width: 956px) {
            font-size: 20px;
            line-height: 20px;
        }
        @media only screen and (max-width: 800px) {
            font-size: 16px;
            line-height: 16px;
        }
    }
    .item-category {
        font-size: 27px;
        color: #6c6c6c;
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        margin-top: 48px;
        @media only screen and (max-width: 1300px) {
            font-size: 20px;
            line-height: 20px;
        }
        @media only screen and (max-width: 956px) {
            font-size: 18px;
            line-height: 18px;
        }
        @media only screen and (max-width: 800px) {
            font-size: 14px;
            line-height: 14px;
        }
    }
    .item-price {
        font-size: 20px;
        color: #484848;
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 400;
        margin-top: 68px;
    }
`

export default BestProduct;