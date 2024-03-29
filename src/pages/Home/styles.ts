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
  color: ${theme.colors.primary};

  #blocklyDiv{
    margin-top: 48px;
    width: 100%;
    height: calc(100vh - 48px);
    overflow-y: auto;
  }

  .blocklyToolboxDiv, .blocklyFlyout {
    position: fixed;
    top: 86px;
    background-color: ${theme.colors.primary.main};
    height: 100%;
    left: 0;
    box-shadow: 0px 8px 16px rgba(0,0,0,0.2);
    padding: 0;
    
    .blocklyFlyoutBackground{
      fill: none;
    }
  }
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
  background-color: ${theme.colors.primary.light};
  width: 165px;
  height: 100%;
  left: 0;
  box-shadow: 0px 8px 16px rgba(0,0,0,0.2);
  cursor: default;
  z-index: 6;
    
    .instructions-header {
      height: 36px;
      margin-left: 8px;
      display: flex;
      align-items: center;

      img {
        margin-right: 10px;
      }
      label {
        display: flex;
        align-items: center;
        
        span{
          color: ${theme.colors.white};
          font-size: 1.6rem;
          line-height: 110%;
          font-weight: 400;
          margin: 0;
        }
      }
    }
`;