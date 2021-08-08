import styled from 'styled-components';
type Props = {
  bgColor: string;
};
export const StyledIconLink = styled.a<Props>`
  background: ${props => props.bgColor};

  display: flex;
  justify-content: center;
  align-items: center;

  width: max-content;
  padding: 10px;
  border-radius: 50%;
`;
