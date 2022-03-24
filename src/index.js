import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  #capture  {
    width: 600px;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
    img {
      margin: 0 32px;
      width: 128px;
    }
  }
`;

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
