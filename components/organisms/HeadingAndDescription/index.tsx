import React from 'react';
import { Description, DescriptionProps } from '../../atoms/Description';
import { Heading1, Heading1Props } from '../../atoms/Heading1';
import { LinkButtom,  LinkButtomProps} from '../../atoms/LinkButtom';

import { Container } from './styles';

type HeadingAndDescription = {
    before?: React.ReactNode;
}

export const HeadingAndDescription: React.FC<HeadingAndDescription> = ({children, before}) => {
  return (
    <Container>
        {before}
        <Heading1 textColor="primary">Markus Douglas</Heading1>
        <Description>
            Bem vindo ao meu mundo. Aqui é onde mostro todas as minhas
            experiências e paixões, que é desenvolver. #NeverStopLearning
            </Description>
        {children}
    </Container>
    )
}