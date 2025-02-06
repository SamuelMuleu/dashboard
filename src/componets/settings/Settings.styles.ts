import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
  padding: 20px; 
`;

export const Container = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 18px;
  width: 100%; 
  max-width: 20rem; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 0;

  @media (min-width: 768px) {
    margin-right: 14rem; 
  }
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
`;

export const Option = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center; 

  label {
    margin-right: 0; 
    margin-bottom: 10px;
    font-size: 18px;
    text-align: center; 
  }

  input {
    margin-bottom: 10px;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  color: black;
  border-radius: 16px;
  border: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primaryGreen};
  border-radius: ${({ theme }) => theme.borderRadius.primaryHover};

  &:hover {
    background-color: rgb(22, 147, 114);
  }
`;