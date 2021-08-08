import Link, {LinkProps} from 'next/link';
import React from 'react';

import { StyledIconLink } from './styles';
interface Props extends LinkProps {
  icon: React.ReactNode;
  bgColor: string;
}

export const RoundedLinkIcon: React.FC<Props> = ({icon, bgColor, ...rest}) => {
  return (
    <Link {...rest} passHref>
      <StyledIconLink bgColor={bgColor}>
        {icon}
      </StyledIconLink>
    </Link>
  );
}