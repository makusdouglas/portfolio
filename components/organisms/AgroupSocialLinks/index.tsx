import React from 'react';
import { RoundedLinkIcon } from '../../atoms/RoundedLinkIcon';
import {FaTwitter, FaInstagram, FaFacebook, FaLinkedin} from 'react-icons/fa'

import { Container } from './styles';

export const AgroupSocialLinks: React.FC = () => {
  return (
      <Container>
          <RoundedLinkIcon
          href='#'
          bgColor='#55ACEE'
          icon={<FaTwitter size={30}/>}
          />
          <RoundedLinkIcon
          href='#'
          bgColor='#0A7BBA'
          icon={<FaLinkedin size={30}/>}
          />
          <RoundedLinkIcon
          href='#'
          bgColor='#0B84ED'
          icon={<FaFacebook size={30}/>}
          />
          <RoundedLinkIcon
          href='#'
          bgColor='#444444'
          icon={<FaInstagram size={30}/>}
          />
      </Container>
  )
}
