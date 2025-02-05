import styled from "styled-components";

export const AvatarContainer = styled.div`
  width: 40px;  
  height: 40px; 
  border-radius: 50%;
  overflow: hidden;
  margin: 5px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

