import React from 'react';

import { H2, H2Props } from './styles';
export interface Heading2Props extends H2Props {}
export const Heading2: React.FC<Heading2Props> = ({children, ...rest}) => {
  return <H2 {...rest} >{children}</H2>;
}