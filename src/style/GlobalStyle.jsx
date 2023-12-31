import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* v2.0 | 20110126
  http://meyerweb.com/eric/tools/css/reset/ 
  License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	vertical-align: baseline;
	word-break: keep-all;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
h1, h2, h3, h4, h5, h6 {
	margin: 0;
	padding: 0;
}
body {
	line-height: 1;
	background-color: #f5f4ee;
	box-sizing: border-box;
	font-family: 'Noto Sans KR', sans-serif;
}
#root {
    /* width: 100%;
	height: 100%;
    display: flex;
    flex-direction: column; */
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a {
	color: #000;
	text-decoration: none;
	outline: none
}
input {
	outline: none;
}
img {
	display: block;
	width: 100%;
}
button {
	border: 0;
	cursor: pointer;
}
* { 
	box-sizing: border-box;
}
.product-contents {
    position: relative;
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    margin-top: 70px;
  }
  .link-btn {
    margin-top: 50px;
	position: relative;
	display: inline-block;
	padding-bottom: 6px;
	font-size: 18px;
	color: #6c6c6c;
	font-family: "Open Sans", sans-serif;
	text-align: left;
	text-decoration: none;
	&:before {
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
	content: "";
	display: block;
	position: absolute;
	right: 0;
	bottom: 0;
	height: 1px;
	width: 100%;
	background: #6c6c6c;
	transition: width 0.5s ease;
	}
	&:hover:before {
	width: 0%;
	background: #6c6c6c;
	transition: width 0.5s ease;
	}
	&:hover:after {
	width: 0%;
	background: transparent;
	transition: width 0s ease;
	}
  }

  li{
        flex-shrink: 0;
        flex-basis: 30%;
		.productsItem{
			display:flex;
			flex-direction: column;
			gap: 20px;
			.textWrap{
				display: flex;
				flex-direction: column;
				gap:10px;
				.itemTitle{
					font-size: 20px;
					font-weight: normal;
					transition: 500ms;
					color: rgba(0,0,0,0.5);
				}
				.itemFlex{
					display: flex;
					justify-content: space-between;
				}

			}
		}
        
    }
`;

export default GlobalStyle;
