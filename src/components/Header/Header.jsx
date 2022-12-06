import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import Button from '../Button/Button';


const Header = () => {
  const {user,onClose} = useTelegram()
  
  return (
   <div className={'header'}>
      <Button onClick={onClose}>Close</Button>
      <span className={'username'}>
        {user}
      </span>
   </div>
  );
};

export default Header;