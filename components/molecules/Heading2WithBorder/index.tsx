import React from 'react';
import { Heading2 } from '../../atoms/Heading2';

import { Container } from './styles';

export const Heading2WithBorder: React.FC = () => {
  return (
      <Container>
          <Heading2 textColor='text'>FullStack Developer</Heading2>
      </Container>
  )
}