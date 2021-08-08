import React from 'react';

import { Container, ContainerBaseProps} from './styles';

export const ContainerBase: React.FC<ContainerBaseProps> = ({children, ...rest}) => {
  return (      
          <Container {...rest} >{children}</Container>
  );
}

