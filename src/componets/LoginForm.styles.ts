import styled from "styled-components";
export const Form = styled.form`
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 10rem;




  input {
    margin-bottom: 1rem;

    padding: 0.5rem;
    font-size: 1rem;
    width: 25rem;
    height: 1.8rem;
    border: 1px solid #ddd;
    border-radius: 0.7rem;
    outline: none;

    &:focus {
      border-color: #60c192;
      box-shadow: 0 0 0 2px rgba(96, 193, 146, 0.3);
    }

    &::placeholder {
      text-indent: 0.8rem;
    }
  }

  h2 {
    font-size: large;
    font-weight: 500;
  }

  a {
    display: flex;
    justify-content: end;
    color: #545a56;
    margin-bottom: 1rem;
    opacity: 0.8;
    text-decoration: underline;
    transition: all 0.3s ease;

    &:hover {
      color: rgb(145, 138, 138);
    }
  }


  @media (max-width: 768px) {
    width: 40%;
    margin-right: 6rem;
    input {
    width: 15rem;
  }
  a {
margin-left: 2rem;
width: 10rem;

  
  }
  h2{
    width: 18rem;
  
  }

  }
`;

export const ButtonSubmit = styled.button`
  padding: 0.8rem;
  background: #46b582;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 700;
  border-radius: 0.7rem;
  font-size: large;

  &:hover {
    background: rgb(24, 62, 44);
  }

  &:disabled {
    background: #dcdcdc; 
    color: #a1a1a1; 

    opacity: 0.6; 
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 3rem;
  }
`;

export const Social = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    margin-left: 4rem;
    margin-top: 1rem;
  }
`;
export const SocialButton = styled.button`
  padding: 0.8rem;
  margin-top: 1rem;
  background-color: #ffffff;
  border: none;
  border-radius: 50%;
  margin-left: 0.8rem;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-left: 1rem;
  }
`;

export const Error = styled.p`
  color: red;
  font-size: 0.875rem;
  display: flex;
  justify-content: center;
`;
