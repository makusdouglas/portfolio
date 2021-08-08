import Link from 'next/link';
import React from 'react';
import { StyledLinkButtom} from './styles';

type Props = {
    title: string;
    href: string;
    bgColor?: boolean;
}

export const LinkButtom: React.FC<Props> = ({title, href, bgColor}) => {
  return (
    <Link href={href} passHref>
      <StyledLinkButtom href={href} bgColor={bgColor}>
        {title}
      </StyledLinkButtom>
    </Link>
  )
}