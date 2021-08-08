import styled from 'styled-components';
export type ContainerBaseProps = {
  bg: 'primary' | 'secondary';
};
export const ContaineAround = styled.div<ContainerBaseProps>`
  background-color: ${props =>
    props.bg === 'primary'
      ? props.theme.color.bgPrimary
      : props.theme.color.bgSecondary};
  width: 100vw;
  height: 90vh;
`;
export const Container = styled.div<ContainerBaseProps>`
  background-color: ${props =>
    props.bg === 'primary'
      ? props.theme.color.bgPrimary
      : props.theme.color.bgSecondary};

  color: ${props => props.theme.color.text};
  width: 100%;
  margin: 0;
  max-width: 1280px;
  min-width: 420px;
  margin: 0 auto;
  height: 90vh;

  display: flex;
  flex-direction: column;
  position: relative;
`;
