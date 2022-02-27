import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h2`
  position: relative;
  text-align: center;
  padding: 2rem;
  font-size: 3rem;
`;

function Title({ title }) {
  return <StyledTitle>{title}</StyledTitle>;
}

export default Title;
