import styled from 'styled-components';

export const ModalStyles = styled.div`
  display: ${props => (props.isModalOpen ? 'block' : 'none')};
  span {
    cursor: pointer;
  }
`;

ModalStyles.shouldForwardProp = (prop) => prop !== 'isModalOpen';