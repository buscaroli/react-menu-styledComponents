import React from "react";
import styled from "styled-components";

const StyledMenu = styled.div`
  position: relative;
  text-align: center;
`;

const StyledButton = styled.button`
  margin: 0.3rem 1rem;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  background-color: darkgrey;
  color: snow;
  border-radius: 8px;
`;

function Menu({ countries, filterItems }) {
  return (
    <StyledMenu>
      {countries.map((country, index) => (
        <StyledButton
          key={index}
          onClick={() => {
            return filterItems(country);
          }}
        >
          {country}
        </StyledButton>
      ))}
    </StyledMenu>
  );
}

export default Menu;
