import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, Logo,  Link } from "./SharedLayout.styled";
import { FiFilm } from "react-icons/fi";


const SharedLayout = () => {
  return (
    <>
      <Header>
        <Logo>
          <FiFilm size='16'/> Filmoteka
        </Logo>
        
        <nav>
          <Link to="/"> Home </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>

      <Container>
        <Suspense fallback={<div> Loading... </div>}>
          <Outlet/> 
        </Suspense>
      </Container>      
    </>
  );
}

export default SharedLayout;