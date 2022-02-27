import { React, useState } from "react";
import styled from "styled-components";
import cities from "./data.js";
import Title from "./Title";
import Menu from "./Menu";
import List from "./List";

const StyledApp = styled.div`
  max-width: 80%;
  margin: 0 auto;
  font-family: Verdana, sans-serif;
`;

let title = "Countries";
const menuItems = ["All", ...new Set(cities.map((city) => city.country))];

function App() {
  const [data, setData] = useState(cities);
  const [menu, setMenu] = useState(menuItems);

  const filterItems = (country) => {
    if (country === "All") {
      setData(cities);
      return;
    }
    const filteredItems = cities.filter((city) => city.country === country);
    setData(filteredItems);
  };

  return (
    <StyledApp>
      <Title title={title} />
      <Menu countries={menu} filterItems={filterItems} />
      <List data={data} />
    </StyledApp>
  );
}

export default App;
