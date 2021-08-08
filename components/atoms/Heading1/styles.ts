import styled from 'styled-components';
export type H1Props = {
  textColor: 'text' | 'primary';
};

export const H1 = styled.h1<H1Props>`
  color: ${props =>
    props.textColor === 'primary'
      ? props.theme.color.primary
      : props.theme.color.text};
  font-size: ${props => props.theme.fontSizes.xl};
`;
