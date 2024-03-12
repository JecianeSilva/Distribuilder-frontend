// ProgrammingBlock.js
import React from 'react';
import BlockImage from '../../assets/block-image.svg';
import { BlockContainer } from './styles';


const Block: React.FC = () => {
  return (
    <BlockContainer typeLayoutBlock='normal' onClick={() => { }}>
      <img
        src={BlockImage}
        alt="Programming Block"
        style={{ width: '100%', height: 'auto', maxWidth: '140px' }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          fontSize: '2rem',
          color: 'white',
        }}
      >
        <p>
          SET <span style={{ color: 'red' }}></span>
        </p>
        <p>
          Device<input></input>  ▾
          <span style={{ color: 'red' }}>Count</span> TO <span style={{ color: 'red' }}>""</span>
        </p>
      </div>
    </BlockContainer>
  );
};

export default Block;