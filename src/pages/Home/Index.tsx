import React, { useEffect, useRef } from 'react';
import ReactModal from 'react-modal';

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
      },
      {
        "kind": "block",
        "type": "ligar_leds",
      },
      {
        "kind": "block",
        "type": "math_change"
      }
    ]
  };



  useEffect(() => {
    if (!blocklyDivRef.current) {
      return;
    }

    var mathChangeJson = {
      "message0": "Contar Pessoas %1",
      "args0": [
        { "type": "field_variable", "name": "VAR", "variable": "item", "variableTypes": [""] },
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230
    };
    Blockly.Blocks['math_change'] = {
      init: function () {
        this.jsonInit(mathChangeJson);
      }
    };

    Blockly.Blocks['ligar_leds'] = {
      init: function () {
        this.jsonInit({
          message0: "Ligar leds",
          "previousStatement": null,
          "nextStatement": null,
          "colour": 280
        })
      }
    }
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
            <button onClick={() => { }}>
              <img src="src/assets/icons/square.svg" alt="" height={22} width={22} />
            </button>
          </div>
        </InstructionListContainer>
        <div id="blocklyDiv" ref={blocklyDivRef} />
      </Content>
      <ReactModal
        open={open}
      >
      </ReactModal>
    </Container >
  );
}

export default Home;