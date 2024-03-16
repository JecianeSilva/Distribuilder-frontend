import styled from 'styled-components';

export interface PropsBlockStyled {
  typeLayoutBlock: string;
}

export const BlockContainer = styled.div<PropsBlockStyled>`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  & :focus {
    transform: scale(1.1);
  }
`;
