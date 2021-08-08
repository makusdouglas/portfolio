import React from 'react';

import { StyledDescription, StyledDescriptionProps } from './styles';

export interface DescriptionProps extends StyledDescriptionProps {}

export const Description: React.FC<DescriptionProps> = ({children,...rest}) => {
  return (
      <StyledDescription {...rest}>
          {children}
      </StyledDescription>
    )
}
