import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import styled from "styled-components";

const StyledApp = styled.div`
  position: relative;
  height: 100%;
  background-color: #eeeeee;
`;

ReactDOM.render(
  <React.StrictMode>
    <StyledApp>
      <App />
    </StyledApp>
  </React.StrictMode>,
  document.getElementById("root")
);
