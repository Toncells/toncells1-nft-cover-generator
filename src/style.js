import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import NameOfYourFontWoff2 from "./fonts/Inter-Regular.ttf";

export default createGlobalStyle``;

export const Num = styled.span`
	@font-face {
		font-family: "Inter";
		src: local("Inter"), url(${NameOfYourFontWoff2});
	}
	font-family: "Inter", sans-serif;
	font-size: 120px;
	font-weight: 900;
	position: absolute;
	top: 175px;
	left: 300px;
`;

export const XNum = styled(Num)`
	top: 723px;
	left: 183px;
	font-size: 90px;
`;

export const YNum = styled(Num)`
	top: 723px;
	left: 583px;
	font-size: 90px;
`;
