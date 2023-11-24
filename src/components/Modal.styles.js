import styled from 'styled-components';

export const ModalStyles = styled.div.withConfig({
  shouldForwardProp: prop => prop !== 'isModalOpen',
})`
  display: ${props => props.isModalOpen ? 'block' : 'none'};
  span {
    cursor: pointer;
  }
`;