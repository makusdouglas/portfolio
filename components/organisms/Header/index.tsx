import React from 'react';
import Image from 'next/image'

import { StyledHeder, NavContainer } from './styles';
import Logo from '../../../public/assets/logo.png'
import { LinkButtom } from '../../atoms/LinkButtom';

export const Header: React.FC = () => {
  return (
      <StyledHeder>
          <div>
            <Image
                src={Logo}
                alt="Logo"
                layout= {'intrinsic'}
            />
          </div>

          <div>
            <NavContainer>
                <LinkButtom
                    href="#stacks"
                    title="Stacks"
                />
                <LinkButtom
                    href="/projects"
                    title="Projects"
                />
                <LinkButtom
                    href="/about-me"
                    title="About me"
                />
            </NavContainer>
            <LinkButtom
                href="/contact"
                title="Contact"
                bgColor={true}
            />
          </div>
      </StyledHeder>
  );
}
