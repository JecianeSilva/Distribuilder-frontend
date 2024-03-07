import React from 'react';
import { Container, Content, InstructionListContainer, InstructionListItem } from './styles';
import ToolBar from '../../components/Toolbar';

import BlockImage from '../../assets/block-image.svg';

interface DeviceProps {
  id: string;
  name: string;
  ip: string,
  port: string,
  status: boolean;
};

const Home: React.FC = () => {
  const devices: DeviceProps[] = [
    {
      id: '1',
      name: 'Device 1',
      ip: '192.168.1.1',
      port: '8080',
      status: true,
    },
    {
      id: '2',
      name: 'Device 2',
      ip: '192.168.1.2',
      port: '8080',
      status: false,
    },
    // More devices
  ];

  return (
    <Container>
      <ToolBar />
      <Content>
        <InstructionListContainer>
          <div className='content'>
            <div className='instructions-header'>
              <label>
                <img src="src/assets/icons/square.svg" alt="" />
                <span>Instruções</span>
              </label>
            </div>
            <div>
              {devices.map(item => {
                return (
                  <>
                    <InstructionListItem>
                      <strong>{item.name}</strong>
                    </InstructionListItem>
                    {(
                      <div className="instruction-subitem">
                        <img className="block-image" src={BlockImage} alt="" width={80} />
                        <img className="block-image" src={BlockImage} alt="" width={80} />
                        <img className="block-image" src={BlockImage} alt="" width={80} />
                        <img className="block-image" src={BlockImage} alt="" width={80} />
                      </div>
                    )}
                  </>
                )
              })}
            </div>

          </div>
        </InstructionListContainer>
        <canvas width="1326" height="815" style={{ width: '1109px', height: '724px' }}>
        </canvas>
      </Content>
    </Container>
  );
}

export default Home;