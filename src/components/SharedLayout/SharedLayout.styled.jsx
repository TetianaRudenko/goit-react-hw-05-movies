import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.main`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;


const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 30px 8px 8px;
  margin-bottom: 16px;
  //border-bottom: 1px solid black;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  > nav {
    display: flex;
  }
`;

const Logo = styled.p`
  font-weight: 700;
  margin: 0;
  padding: 8px;
`;

const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: rgba(219, 216, 0, 0.877);
  }
`;

export { Container,Header, Logo,  Link}