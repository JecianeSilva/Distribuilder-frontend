import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white}
`;

export const Content = styled.div`
  overflow-y: auto;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.white};
  color: ${theme.colors.primary};
  padding: 40px 16px;
`;


export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 24px;
  h2 {
    border-left: 3px solid ${theme.colors.white};
    padding-left: 12px;
    font-size: 22px;
    width: 100%;
    font-weight: 400;
  }
`;

export const InstructionListContainer = styled.div`
  position: fixed;
  top: 48px;
  background-color: ${theme.colors.primary.lightness};
  width: 320px;
  height: 100%;
  left: 0;
  box-shadow: 0px 8px 16px rgba(0,0,0,0.2);
  cursor: default;
  z-index: 6;

  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    scrollbar-width: none;

    .instructions-header {
      display: flex;
      align-items: center;
      flex-flow: row;

      background-color: ${theme.colors.primary.light};
      position: sticky;
      top: 0;
      left: 0;

      height: 41px;
      width: 100%;

      padding: 0 8px 0 16px;
      z-index: 1;

      label {
        display: flex;
        align-items: center;
        img {
          margin-right: 10px;
        }
        span{
          color: ${theme.colors.white};
          font-size: 1.4rem;
          line-height: 110%;
          font-weight: 400;
          margin: 0;
        }
      }
    }
    
  .instruction-subitem {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    padding: 1rem;
    width: 100%;
    height: auto;
    
    .block-image {
      width: 80px;
      height: auto;
      transition: transform .2s; 
    }
    .block-image:active, .block-image:focus{
      transform: scale(1.2);
    }
  }
`;

export const InstructionListItem = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row;

  background-color: ${theme.colors.primary.lightness};
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);
  position: sticky;
  top: 0;
  left: 0;

  min-height: 41px;
  width: 100%;

  padding: 0 8px 0 16px;
  z-index: 1;

  color: #292929;
  font-size: 1.3rem;
  text-transform: uppercase;
  strong {
    font-weight: 700;
  }
`