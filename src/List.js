import React from "react";
import styled from "styled-components";

const StyledCity = styled.div`
  margin: 0 auto;
  padding: 1rem;
  border-bottom: 2px solid darkgrey;
`;

const StyledName = styled.h4`
  font-size: 1.5rem;
`;

const StyledParagraph = styled.p`
  font-size: 1.2rem;
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
