import styled from 'styled-components';

export const Container = styled.div`
  .modal-image {
    .content {
      width: 500px;
      height: 600px;
      margin: auto;
      overflow: hidden;
      padding: 30px;
      border-radius: 20px;
      z-index: 9999;
    }
    img {
      position: static;
      margin: 20px;
      max-width: 300px;
      width: 380px;
      height: 300px;
      object-fit: contain;
      overflow: hidden;
    }
  }
`;
