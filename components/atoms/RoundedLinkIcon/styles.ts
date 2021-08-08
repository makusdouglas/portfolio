import { darken } from 'polished';
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

  transition: all ease-in-out 0.2s;

  &:hover {
    background: ${props => darken(0.2, props.bgColor)};
    color: ${props => darken(0.2, props.theme.color.text)};
  }
`;
