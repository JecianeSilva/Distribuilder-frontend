import styled from "styled-components";
import { default as arrowIcon } from '../../assets/icons/arrow-expand.svg';

export const ToolbarContainer = styled.div<{ isSidebarOpen?: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 48px;
  // user-select: none;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  z-index: 8;
  background-color: ${(props) => props.theme.colors.primary.main};
  box-sizing: border-box;
`;

export const MenuList = styled.div`
  display: flex;
  justify-content: flex-start;
  position: relative;
  flex-basis: 30%;
  
  .toogle-menu {
    background: none;
    border: none;
    min-width: 48px;
  }
`;

export const MenuItem = styled.div<{ hasSubItem?: boolean }>`
  padding: 1rem;
  width: 48px;
  height: 48px;
  border-right: 1px solid rgba(255,255,255, 0.02);
  border-left: 1px solid rgba(255,255,255, 0.02);
  &:after {
    content: "";
    display: ${(props) => (props.hasSubItem ? 'flex' : 'flex')};
    height: 7px;
    position: relative;
    background-image: url(src/assets/icons/arrow-expand.svg);
    background-position: bottom right;
    background-size: contain;
    background-repeat: no-repeat;

    opacity: 0.8;
    bottom: 0;
    right: -10px;
    z-index: 999;
  }
`;
