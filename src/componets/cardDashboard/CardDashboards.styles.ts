import styled from "styled-components";

export const StyledCard = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary};
 
; 
`;

export const StyledCardContent = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  align-items: end;
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;


  h3 {
margin-right: 50rem;

margin-top: -2rem;
font-size: 24px;
@media (max-width: 768px) {
      margin-right: 0;
      font-size: 20px;
    }
  }

  p {
    margin: 5px 0;
    word-wrap: break-word; 
  }

  button {
 text-transform: none;
color: black;
gap: .2rem;
   background-color: ${({ theme }) => theme.colors.primaryGreen};
    border-radius: ${({ theme }) => theme.borderRadius.primaryHover};
    &:hover {
      background-color: rgb(22, 147, 114);
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
  background: ${({ theme }) => theme.colors.secondary};
  color: white;

width:13rem;
max-height: 4rem;
display: flex;
gap: .5rem;
align-items: center;

div{

p{
  display: flex;
  align-items: start;
}

  flex-direction: column;
}
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  h3 {
    font-size: 1rem;
    margin-bottom: 0.7rem;
  }

  p {
    font-size: 0.9rem;
    opacity: 0.7;
    font-weight: bold;
  }
`;
export const NumberCard = styled.div`
display: flex;
font-size: 21px;
font-weight: 500;
  align-items: start;
  

`

export const Name = styled.div`
  font-weight: 900;
  font-size: 22px;
  margin-left: 2.2rem;
  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center;
  }

`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: start;
  gap: 1rem;
  height: 3rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 0;

  }
`;

export const ProfileStatuContainer = styled.div`
  display: flex;
  align-items: start;
  gap: 5rem;
  margin-left: 9.5rem;
  margin-bottom:2rem;
  @media (max-width: 768px) {
    margin-left: 0;
    gap: 0;

    flex-direction: column;
    align-items: center;
  }
`;

export const DetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
margin-left: 1rem;


  p {
    opacity: 0.6;
  }
  
  div {
    font-weight: 700;
  }
  @media (max-width: 768px) {
    align-items: center;
    margin-left: 0;
    margin-top: 7rem;
  
  }
`;

export const CardsDownContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
  gap: 2rem; 
padding: 1rem;
@media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`
export const IconWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.disabledText};
  color: black;
  border-radius: 50%;
  padding: 2px;

`;
export const TimeFilter = styled.div`
display: flex;
align-items: end;
justify-content: end;
margin-left: 30rem;

min-width: 130px;
@media (max-width: 768px) {
    margin-left: 0;
    justify-content: center;
  }

`
export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin-top: 1rem;
  margin-right: 2rem;
  gap: 1rem;
  @media (max-width: 768px) {
    justify-content: center;
    margin-right: 0;
    margin-bottom: 3rem;
  }
`;