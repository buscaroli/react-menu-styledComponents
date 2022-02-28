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
  color: #222222;
  border: none;
  cursor: pointer;
  letter-spacing: 0.3rem;
  font-weight: bold;

  &::after {
    content: "";
    display: block;
    clear: both;
    position: relative;
    left: 0;
    bottom: 0;
    height: 1px;
    width: 100%;
    border-bottom: 2px solid #333333;
    margin: 0 auto;
    padding: 0.5px 0px;
  }
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
