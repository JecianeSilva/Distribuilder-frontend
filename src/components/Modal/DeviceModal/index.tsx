import React, { useState } from 'react';
import Modal from 'react-modal';
import { Container } from './styles';

interface DeviceProps {
    id: string;
    name: string;
    ip: string,
    port: string,
    status: boolean;
};

interface ModalProps {
    isOpen: boolean;
    loading?: boolean;
    requestClose: () => void;
    scheduled?: boolean;
}

export const DeviceCreateModal: React.FC<ModalProps> = ({
    isOpen = false,
    loading = false,
    requestClose,
}) => {
    const [deviceName, setDeviceName] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Device registered:', {
            deviceName,
        });
        requestClose();
    };

    return (
        <Container>
            <Modal isOpen={isOpen} onRequestClose={requestClose}>
                <h2>Novo Dispositivo</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="deviceName">Nome do Dispositivo:</label>
                    <input
                        type="text"
                        id="deviceName"
                        value={deviceName}
                        onChange={(e) => setDeviceName(e.target.value)}
                    />

                    <button type="submit">Cadastrar</button>
                </form>
            </Modal>
        </Container>
    );
};
