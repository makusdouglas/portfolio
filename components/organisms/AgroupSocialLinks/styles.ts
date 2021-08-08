import styled from 'styled-components';

export const Container = styled.div`
  & > * {
    margin-left: 10px;
    margin-right: 10px;
  }
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: -40px;
  left: calc(50% - 150px);
  right: calc(50% - 150px);
  z-index: 100;

  background: ${props => props.theme.color.bgPrimary};
  padding: 10px;
  border-radius: 8px;
`;
