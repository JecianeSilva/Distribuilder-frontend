import React, { useEffect, useRef } from 'react';
import { Container, Content, InstructionListContainer, InstructionListItem } from './styles';
import ToolBar from '../../components/Toolbar';

import * as Blockly from 'blockly';

const Home: React.FC = () => {
  const blocklyDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!blocklyDivRef.current) {
      return;
    }

    var toolbox = {
      "kind": "categoryToolbox",
      "contents": [
        {
          "kind": "category",
          "name": "Control",
          "contents": [
            {
              "kind": "block",
              "type": "controls_if"
            },
          ]
        },
        {
          "kind": "category",
          "name": "Logic",
          "contents": [
            {
              "kind": "block",
              "type": "logic_compare"
            },
            {
              "kind": "block",
              "type": "logic_operation"
            },
            {
              "kind": "block",
              "type": "logic_boolean"
            }
          ]
        }
      ]
    };

    const workspace = Blockly.inject(blocklyDivRef.current, { toolbox: toolbox });

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
        <div id="blocklyDiv" ref={blocklyDivRef} style={{ height: '100vh', width: '100%' }}></div>
      </Content>
    </Container >
  );
}

export default Home;