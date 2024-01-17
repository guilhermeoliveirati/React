import styled, { keyframes } from "styled-components";



interface NavbarProps {
  isOpen: boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const NavbarContainer = styled.div<NavbarProps>`
  width: 100%;
  height: 10rem;
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease-in-out;
`;

export const NavBarStyle = styled.div<NavbarProps>`
  margin: 10px;
  width: 100%;
  height: 100%;
  background-color: blue;
`;
