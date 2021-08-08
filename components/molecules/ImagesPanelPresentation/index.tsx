import React from 'react';
import Image from 'next/image'
import { Container } from './styles';

import HtmlImage from '../../../public/assets/html.png';
import CssImage from '../../../public/assets/css.png';
import JsImage from '../../../public/assets/JS.png';
import ImageTop from '../../../public/assets/image-top.png';

export const ImagesPanelPresentation: React.FC = () => {
  return (
      <Container>
        <div className='htmlPresentation' >
          <Image
            src={HtmlImage} 
            alt="html image"
            quality={100}
            />
        </div>
        <div className="cssPresentation">
          <Image 
            src={CssImage} 
            alt="css image"
            quality={100}
            />
        </div>
        <div className='panelPresentation'>
          <Image 
            src={ImageTop}  
            alt="panel html css"
            quality={100}
            />
        </div>
        <div className='jsPresentation'>
          <Image 
            src={JsImage}  
            alt="js html css"
            quality={100}
          />
        </div>
      </Container>
  )
}