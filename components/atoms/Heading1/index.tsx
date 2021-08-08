import React from 'react';

import { H1, H1Props } from './styles';
export interface Heading1Props extends H1Props {}
export const Heading1: React.FC<Heading1Props> = ({children, ...rest}) => {
  return <H1 {...rest} >{children}</H1>;
}