import styled from "styled-components";

export const SidebarContainer = styled.div<{ open: boolean }>`
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 250px;
    background: #111;
    transform: ${(props) => (props.open ? "translateX(0)" : "translateX(-100%)")};
    transition: transform 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    z-index: 1000;
  }
`;
export  const HamburgerMenu = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 4rem;
    left: 1rem;
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    z-index: 1100;
    cursor: pointer;
  }
`;
