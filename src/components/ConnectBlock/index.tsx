import React from 'react';

const ConnectBlock = ({ imageSrc, isConnected, onClick, onMouseEnter, onMouseLeave }) => (
  <div
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    style={{
      backgroundImage: `url(${imageSrc})`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      border: isConnected ? '2px solid green' : '2px solid gray',
      width: '100px',
      height: '100px',
    }}
  />
);

export default ConnectBlock;