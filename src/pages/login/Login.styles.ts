import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32rem;
  font-weight: 700;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const RightSide = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.focusBorder};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border-top-right-radius: 7rem;
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.large};
  align-items: center;
  margin-left: 4rem;
  margin-top: 14rem;
  width: 32rem;

  &::before {
    content: "";
    position: absolute;
    top: 2rem;
    left: 5rem;
    width: 100%;
    height: 100%;
    background: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20480%20480%22%3E%3Cpath%20d%3D%22M343.3%20282.8A239%20239%200%200%201%20480%20240c-50.8%200-98-15.8-136.8-42.8%208.4-46.5%2030.6-91%2066.5-127-36%2036-80.4%2058.2-127%2066.5C255.9%2098%20240%2050.8%20240%200c0%2050.8-15.8%2098-42.8%20136.8-46.5-8.4-91-30.6-127-66.5%2036%2036%2058.2%2080.4%2066.5%20127C98%20224.1%2050.8%20240%200%20240c50.8%200%2098%2015.8%20136.8%2042.8-8.4%2046.5-30.6%2091-66.5%20127%2036-36%2080.4-58.2%20127-66.6A239%20239%200%200%201%20240%20480c0-50.8%2015.8-98%2042.8-136.8%2046.5%208.4%2091%2030.6%20127%2066.5-36-36-58.2-80.4-66.5-127Z%22%20stroke%3D%22%23FFFFFF%22%20fill%3D%22none%22%20stroke-width%3D%222%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E') no-repeat center center / 60%;
    clip-path: inset(0 0 50% 0);
    z-index: 1;
    opacity: 0.2;
  }

  @media (max-width: 768px) {
    width: 70%;
    margin-top: 2rem;
    margin-right: 3rem;
    padding: ${({ theme }) => theme.spacing.medium};
  }
`;

export const RightTitle = styled.div`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: -2rem;
  margin-left: 1rem;
  margin-top: -3rem;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-top: 0;
  }
`;

export const Card = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  width: 28rem;
  margin-left: 1.5rem;
  margin-top: 2rem;
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text};

  h4 {
    margin-left: 1rem;
    font-weight: 600;
    font-size: 23px;
    width: 22rem;
  }

  p {
    margin-bottom: 2rem;
    margin-left: 1rem;
    width: 22rem;
  }

  @media (max-width: 768px) {
    width: 80%;
    margin-left: 1rem;
    
    h4 {
      margin-left: 1rem;
      font-weight: 600;
      font-size: 23px;
      width: 12rem;
    }

    p {
      margin-bottom: 2rem;
      margin-left: 1rem;
      width: 12rem;
    }
  }
`;

export const AvatarGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.small};
  max-width: 13rem;
  margin-left: 14rem;
  margin-bottom: 1.2rem;

  @media (max-width: 768px) {
    justify-content: space-evenly;
    max-width: 100%;
    margin-left: 0;
    margin-top: ${({ theme }) => theme.spacing.small};
    margin-bottom: ${({ theme }) => theme.spacing.small};
  }
`;
