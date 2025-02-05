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
  border-radius: 15px;
  gap: 10px;
  padding: 20px;

  p {
    margin-bottom: 2rem;
  }


  @media (max-width: 768px) {
    width: 100%;
  }
`;
