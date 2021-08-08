import React from 'react';

import { Container, ContaineAround, ContainerBaseProps} from './styles';

export const ContainerBase: React.FC<ContainerBaseProps> = ({children, ...rest}) => {
  return (     
        <ContaineAround {...rest}>
          <Container {...rest} >{children}</Container>

        </ContaineAround> 
  );
}

