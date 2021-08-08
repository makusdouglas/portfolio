import React from 'react';
import { ContainerBase } from '../../atoms/ContainerBase';
import { Heading1 } from '../../atoms/Heading1';

import { Container } from './styles';

const Stacks: React.FC = () => {
  return  (
    <ContainerBase bg='secondary'>
      <Container id='stacks'>
        <Heading1 textColor='text'>Stacks</Heading1>
      </Container>
    </ContainerBase>
    )
}

export default Stacks;