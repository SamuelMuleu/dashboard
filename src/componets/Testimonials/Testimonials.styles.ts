import styled from "styled-components";

export const TestimonialAuthor = styled.h3`
  margin-top: -1rem;
  font-size: small;
  width: 21rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const TestimonialCard = styled.div`

  gap: ${({ theme }) => theme.spacing.small};
  padding: ${({ theme }) => theme.spacing.medium};


  p {
    margin-bottom: ${({ theme }) => theme.spacing.large};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
