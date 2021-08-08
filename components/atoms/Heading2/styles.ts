import styled from 'styled-components';
export type H2Props = {
  textColor: 'text' | 'primary';
};

export const H2 = styled.h2<H2Props>`
  color: ${props =>
    props.textColor === 'primary'
      ? props.theme.color.primary
      : props.theme.color.text};
  font-size: ${props => props.theme.fontSizes.md};
`;
