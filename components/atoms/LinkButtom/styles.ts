import styled from 'styled-components';
import Link from 'next/link';
import { darken, lighten } from 'polished';

type styledLinkProps = {
  bgColor?: boolean;
};

export const StyledLinkButtom = styled.a<styledLinkProps>`
  display: block;
  text-align: center;
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: bold;
  background: ${props =>
    props.bgColor ? props.theme.color.primary : 'transparent'};
  padding: 8px ${props => (props.bgColor ? '18px' : '')};
  border-radius: 20px;
  transition: all ease-in-out 0.2s;

  &:hover {
    background: ${props =>
      props.bgColor ? darken(0.2, props.theme.color.primary) : ''};
    color: ${props =>
      !props.bgColor ? darken(0.2, props.theme.color.text) : ''};
  }
`;
