import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  text-align: start;
  padding: 30px;
  max-width: 400px;

  & > h1 {
    margin-bottom: 0;
  }
  @media (max-width: 430px) {
    padding: 10px;
  }
`;
