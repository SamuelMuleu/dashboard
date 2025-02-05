import styled from "styled-components";

export const StyledCard = styled.div`
border-radius: 1rem;

  color: white;
  background: #27282c;
`;

export const StyledCardContent = styled.div`
 border-radius: 1rem;
  background: #27282c;
  color: white;
  align-items: end;
  margin-right:6rem;
  max-height: 25rem;
  display: flex;
  flex-direction: column; 
  h3 {

    width: 100%;

  }

  p {
    margin: 5px 0;
    word-wrap: break-word; 
  }

  button {
    margin-top: 20px;
    margin-right: 1.3rem;
    background-color: #35c7a0;
    border-radius: 8px;
    &:hover{
      background-color:rgb(19, 125, 96);

    }
  }
`;

export const CardsContainer = styled.div`
  display: grid;


  @media (max-width: 768px) {

    grid-template-columns: 1fr;

  }
`;

export const Card = styled.div`
  background-color: #3d3e42;
  color: white;
  width: 10rem;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  
`;
export const Name = styled.div`
font-weight: 900;
font-size: 22px;
margin-left: 2.2rem;

`
export const ProfileContainer = styled.div`
display: flex;
align-items: start;
gap: 1rem;

`

export const ProfileStatuContainer = styled.div`
display: flex;
align-items: start;
gap: 2rem;
margin-left: 10rem;


`
export const DetailsContent = styled.div`
display: flex;
flex-direction: column;
align-items: start;




p{
  opacity: 0.6;
}
div{
  font-weight: 700;
}

`