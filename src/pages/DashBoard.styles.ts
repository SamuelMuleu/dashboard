import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;

  background-color: black;
  color: white;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Sidebar = styled.aside`
  width: 100%;
  background: black;
  color: #27282c;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    width: 250px;
    margin-left: 0.7rem;
  }

  div {
    font-size: small;
  }

  h2 {
    color: white;
    font-size: larger;
  }

  nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  nav ul li {
    padding: 10px 0;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    transition: 0.3s;
  }

  nav ul li:hover {
    color: #4caf50;
    background: #27282c;
    border-radius: 0.6rem;
  }
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: black;
  padding: 10px;
  border-radius: 8px;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  input {
    width: 100%;
    border: none;
    border-radius: 5px;
    background: #27282c;
    padding: 10px;

    @media (min-width: 768px) {
      width: 50%;
    }
  }
`;

export const Metrics = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;

  div {
    background: #27282c;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
  }
`;



export const SearchContainer = styled.div`
  position: relative;
  width: 100%;

  @media (min-width: 768px) {
    width: 250px;
  }

  input {
    width: 100%;
    padding: 10px 40px 10px 36px;
    border-radius: 8px;
    border: 1px solid #ccc;
    outline: none;
    color: white;
    font-size: 16px;
    background: #27282c;
  }

  svg {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #666;
    cursor: pointer;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;

  @media (min-width: 768px) {
    margin-top: -1rem;
    margin-left: -34rem;
    align-items: flex-start;
  }

  div {
    font-weight: 900;
  }

  span {
    opacity: 0.4;
  }
`;
export const EmployeeDetailsCard = styled.div`
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
`;
