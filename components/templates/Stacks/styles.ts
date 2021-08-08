import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 100px;
  padding: 30px;

  & > h1 {
    position: relative;
  }
  & > h1:after {
    content: '';
    background: ${props => props.theme.color.primary};
    height: 20px;
    width: 20px;
    border-radius: 50%;

    position: absolute;
    top: -20px;
    margin-left: 10px;
  }

  @media (max-width: 430px) {
    padding: 10px;
  }
`;
