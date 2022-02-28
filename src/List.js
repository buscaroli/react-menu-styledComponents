import React from "react";
import styled from "styled-components";

const StyledCity = styled.div`
  margin: 0 auto;
  padding: 1rem;

  &::after {
    content: "";
    display: block;
    clear: both;
    position: relative;
    left: 0;
    bottom: 0;
    height: 1px;
    width: 60%;
    border-bottom: 2px solid darkgrey;
    margin: 0 auto;
    padding: 4px 0px;
  }
`;

const StyledName = styled.h4`
  font-size: 1.5rem;
  font-family: Courgette, sans-serif;
`;

const StyledParagraph = styled.p`
  font-size: 1.2rem;
  font-family: Nunito, sans-serif;
`;

function List({ data }) {
  return (
    <>
      {data.map((city) => {
        return (
          <StyledCity key={city.id}>
            <StyledName>{city.name}</StyledName>
            <StyledParagraph>{city.desc}</StyledParagraph>
          </StyledCity>
        );
      })}
    </>
  );
}

export default List;
