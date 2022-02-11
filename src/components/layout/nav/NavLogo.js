import React from 'react';
import { AshLogo } from '../../svgs';

const NavLogo = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <AshLogo />
    </a>
  );
});

NavLogo.displayName = 'NavLogo';

export default NavLogo;
