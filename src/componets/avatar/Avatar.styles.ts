import styled from "styled-components";

export const AvatarContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  overflow: hidden;
  margin: ${({ theme }) => theme.spacing.small};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
