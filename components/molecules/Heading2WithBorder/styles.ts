import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  & > h2 {
    border-left: solid ${props => props.theme.color.primary} 2px;
    padding-left: 8px;
  }
`;
