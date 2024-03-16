import React, { useEffect, useRef } from 'react';
import { Container, Content, InstructionListContainer } from './styles';
import ToolBar from '../../components/Toolbar';

import * as Blockly from 'blockly';

const Home: React.FC = () => {
  const blocklyDivRef = useRef<HTMLDivElement>(null);

  const toolboxInstruction = {
    "kind": "flyoutToolbox",
    "contents": [
      {
        "kind": "block",
        "type": "controls_if"
      },
      {
        "kind": "block",
        "type": "controls_whileUntil"
      }
    ]
  };

  useEffect(() => {
    if (!blocklyDivRef.current) {
      return;
    }

    // Blockly.common.defineBlocks(blocks);

    // const workspace = Blockly.inject(blocklyDivRef.current, { toolbox: toolboxDevices, toolboxPosition: '', collapse: true });
    const workspace = Blockly.inject(blocklyDivRef.current, { toolbox: toolboxInstruction });

    return () => {
      workspace.dispose();
    };

  }, []);

  return (
    <Container>
      <ToolBar />
      <Content>
        <InstructionListContainer>
          <div className='instructions-header'>
            <label>
              <img src="src/assets/icons/square.svg" alt="" height={22} width={22} />
              <span>Instruções</span>
            </label>
          </div>
        </InstructionListContainer>
        <div id="blocklyDiv" ref={blocklyDivRef} />
      </Content>
    </Container >
  );
}

export default Home;