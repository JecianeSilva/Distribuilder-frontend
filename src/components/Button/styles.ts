import styled from 'styled-components';

export interface PropsButtonStyled {
    typeLayoutButton: string;
}

export const Container = styled.button<PropsButtonStyled>`
  width: 180px;
  height: 48px;
  border-radius: 8px;
  background-color: ${({ typeLayoutButton, theme, disabled }) =>
        disabled
            ? theme.colors.primary
            : typeLayoutButton === 'primary'
                ? theme.colors.white
                : typeLayoutButton === 'outlined'
                    ? theme.colors.primary
                    : theme.colors.primary};
  margin-left: 32px;
  padding: 10px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  // text
  font-size: 18px;
  color: ${({ typeLayoutButton, theme }) =>
        typeLayoutButton === 'primary' ||
            typeLayoutButton === 'default'
            ? theme.colors.white
            : theme.colors.primary};

  &:not([disabled]):hover {
    filter: brightness(0.9);
  }

  svg.icon-chat {
    width: 20px;
    height: 20px;
    fill: #fff;
  }
  border: 1px solid ${({ typeLayoutButton, theme }) =>
        typeLayoutButton === 'primary' ||
            typeLayoutButton === 'default'
            ? theme.colors.white
            : theme.colors.primary};

`;
