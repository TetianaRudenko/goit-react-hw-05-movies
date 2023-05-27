import styled from "styled-components";
//import { FiChevronsLeft } from "react-icons/fi";

const BackButton = styled.button`
  display: flex;
  align-items: center;
  margin-bottom:6px;
  border-radius: 4px;
  border: 1px solid rgba(128, 128, 128, 0.2);
  box-shadow: 2px 2px 2px rgba(128, 128, 128, 0.3);

`

/* const Icon =styled(FiChevronsLeft)`
  
` */
const MovieDescrWrap = styled.div`
  display: flex;
  margin-bottom: 16px;
`

const MoviePoster = styled.img`
  margin-right: 16px;
  border-radius: 6px;
  box-shadow: 5px 3px 2px 1px rgba(128, 128, 128, 0.3);

`

export { BackButton, MoviePoster, MovieDescrWrap }