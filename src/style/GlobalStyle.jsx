import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* v2.0 | 20110126
  http://meyerweb.com/eric/tools/css/reset/ 
  License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
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
	font-size: 100%;
	/* font: inherit; */
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	background-color: #f5f4ee;
	box-sizing: border-box;
	font-family: 'Noto Sans KR', sans-serif;
}
#root {
    width: 100%;
	height: 100%;
    display: flex;
    flex-direction: column;
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
	text-decoration: none;
}
img {
	display: block;
	width: 100%;
}
button {
	cursor: pointer;
}
.container {
    max-width: 100%;
    margin: 0 auto;
}

div.introduce div.contents-text-wrap a:after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    height: 1px;
    width: 100%;
    background: #9c9c9c;
    transition: width .5s ease;
}

div.introduce div.contents-text-wrap a:before {
    width: 0%;
    /* background: #9c9c9c; */
    transition: width .5s ease;
}

div.introduce div.contents-text-wrap a:after {
    width: 0%;
    background: transparent;
    transition: width 0s ease;
}

/* .gnb_list{
	display: flex;
    justify-content: space-between;
	.gnb_item{
		padding: 0 36px;
	}
} */
`

export default GlobalStyle;