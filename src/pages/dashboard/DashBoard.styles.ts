import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  flex-direction: column;

  @media (min-width: 768px) {
  
    flex-direction: row;
  }
`;

export const Sidebar = styled.aside`
  width: 100%;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.darkGray};
  padding: ${({ theme }) => theme.spacing.medium};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.large};

  @media (min-width: 768px) {
    width: 250px;
  }

  div {
    font-size: small;
  }

  h2 {
    color: ${({ theme }) => theme.colors.white};
    font-size: larger;
  }
  nav{
    @media (max-width: 768px) {

margin-left: 5rem;
}
  }

  nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.small};
    
  }

  nav ul li {
    padding: ${({ theme }) => theme.spacing.small} 0;
    cursor: pointer;
    width:70%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.small};
    transition: 0.3s;
    
   
  }

  nav ul li:hover {
    color: ${({ theme }) => theme.colors.focusBorder};
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
  }
  nav ul li.active {
    color: ${({ theme }) => theme.colors.focusBorder};
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
  }
  .nav-link {
  color: inherit; 
  text-decoration: none;
}


`;

export const MainContent = styled.main`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.medium};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.black};
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};

  @media (min-width: 768px) {
    flex-direction: row;
  }

  input {
    width: 100%;
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    background: ${({ theme }) => theme.colors.darkGray};
    padding: ${({ theme }) => theme.spacing.small};

    @media (min-width: 768px) {
      width: 50%;
    }
  }
`;

export const Metrics = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: ${({ theme }) => theme.spacing.small};

  div {
    background: ${({ theme }) => theme.colors.darkGray};
    padding: ${({ theme }) => theme.spacing.medium};
    border-radius: ${({ theme }) => theme.borderRadius.large};
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
    padding: ${({ theme }) => theme.spacing.small} 40px ${({ theme }) => theme.spacing.small} 36px;
    border-radius: ${({ theme }) => theme.borderRadius.large};
    border: 1px solid ${({ theme }) => theme.colors.border};
    outline: none;
    color: ${({ theme }) => theme.colors.white};
    font-size: 16px;
    background: ${({ theme }) => theme.colors.secondary};


    @media (max-width: 768px) {
     width: 15rem;
     margin-left: 1rem;
    }
  }

  svg {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.gray};
    cursor: pointer;
    @media (max-width: 768px) {
     
     margin-left: 1rem;
    }
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.small};
svg{
  &:hover{
   cursor: pointer;
   color: ${({ theme }) => theme.colors.focusBorder};
  }
}
  @media (min-width: 768px) {
    margin-top: -1rem;
    align-items: flex-start;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }

  div {
    font-weight: 900;
  }

  span {
    opacity: 0.4;
  }
`;

export const EmployeeDetailsCard = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: ${({ theme }) => theme.spacing.medium};
`;


export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};

  div {
    font-weight: bold;
  }

  span {
    font-size: 0.9rem;
    opacity: 0.8;
  }
`;

export const LogoutMenu = styled.div`
  position: absolute;
  top: 60px; 
  right: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

`;