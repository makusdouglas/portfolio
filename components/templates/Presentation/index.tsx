import React from 'react';
import { Header } from '../../organisms/Header';
import {ContainerBase} from '../../atoms/ContainerBase'

export const Presentation: React.FC = () => {
  return (
    <ContainerBase bg='primary'>
        <Header/>
    </ContainerBase>
  )
}