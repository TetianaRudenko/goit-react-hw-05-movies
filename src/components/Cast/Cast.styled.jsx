import styled from "styled-components";

const ActorsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 8px;
  grid-row-gap: 8px;

  margin: 0 auto;
  padding: 0;
  list-style: none;
`

export { ActorsList };
