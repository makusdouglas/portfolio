import styled from 'styled-components';
type Props = {
  bgColor: string;
};
export const StyledIconLink = styled.a<Props>`
  background: ${props => props.bgColor};
`;
