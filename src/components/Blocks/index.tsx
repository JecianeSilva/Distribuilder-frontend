import React from 'react';

interface BlocklyBlockProps {
  type: string;
  fields: {
    [key: string]: string;
  };
}

interface BlocklyCategoryProps {
  name: string;
  colour: string;
  blocks: BlocklyBlockProps[];
}

const BlocklyCategory: React.FC<BlocklyCategoryProps> = ({ name, colour, blocks }) => {
  return (
    <div style={{ backgroundColor: colour }}>
      <h2>{name}</h2>
      {blocks.map((block, index) => (
        <div key={index}>
          <h3>{block.type}</h3>
          <ul>
            {Object.entries(block.fields).map(([key, value]) => (
              <li key={key}>
                {key}: {value}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default BlocklyCategory;