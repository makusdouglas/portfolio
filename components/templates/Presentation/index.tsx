import React from 'react';
import { Header } from '../../organisms/Header';
import {ContainerBase} from '../../atoms/ContainerBase';
import { HeadingAndDescription } from '../../organisms/HeadingAndDescription';
import {PresentationContent} from './styles';
import { LinkButtom } from '../../atoms/LinkButtom';
import { Heading2WithBorder } from '../../molecules/Heading2WithBorder';
import { ImagesPanelPresentation } from '../../molecules/ImagesPanelPresentation';
import { AgroupSocialLinks } from '../../organisms/AgroupSocialLinks';

export const Presentation: React.FC = () => {
  return (
    <ContainerBase bg='primary'>
        <Header/>
        <PresentationContent>
            <HeadingAndDescription 
              before={<Heading2WithBorder/>}
            >
              <LinkButtom href='#' title='My CV' bgColor={true}/>
            </HeadingAndDescription>
            <ImagesPanelPresentation/>
        </PresentationContent>
        <AgroupSocialLinks/>
    </ContainerBase>
  )
}