import styled from "styled-components";

export const Form = styled.form`
  padding: ${({ theme }) => theme.spacing.large};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
  margin-top: 10rem;

  input {
    margin-bottom: 1rem;
    padding: ${({ theme }) => theme.spacing.small};
    font-size: 1rem;
    width: 25rem;
    height: 1.8rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    outline: none;

    &:focus {
      border-color: ${({ theme }) => theme.colors.focusBorder};
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.focusShadow};
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
    color: ${({ theme }) => theme.colors.link};
    margin-bottom: 1rem;
    opacity: 0.8;
    text-decoration: underline;
    transition: all 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.linkHover};
    }
  }

  @media (max-width: 768px) {
    width: 40%;
    margin-left: 2rem;
    justify-content: center;

    input {
      width: 15rem;
    }

    a {
      margin-left: 1.7rem;
      width: 10rem;
    }

    h2 {
      width: 18rem;
    }
  }
`;

export const ButtonSubmit = styled.button`
  padding: ${({ theme }) => theme.spacing.medium};
  background: ${({ theme }) => theme.colors.focusBorder};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  cursor: pointer;
  font-weight: 700;
  font-size: large;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.disabledBg};
    color: ${({ theme }) => theme.colors.disabledText};
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
    margin-left: 5rem;
    margin-top: 1rem;
  }
`;

export const SocialButton = styled.button`
  padding: ${({ theme }) => theme.spacing.medium};
  margin-top: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
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
  color: ${({ theme }) => theme.colors.error};
  font-size: 0.875rem;
  display: flex;
  justify-content: center;
`;
