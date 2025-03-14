import { FC, MouseEvent } from 'react';
import { Avatar, IconButton } from '@mui/material';
import personAvatar from '../../Assets/person-avatar.png';

type MenuButtonProps = {
  isMobile: boolean;
  isOpen: boolean;
  handleOpenUserMenu: (event: MouseEvent<HTMLElement>) => void;
};

const MenuButton: FC<MenuButtonProps> = ({ handleOpenUserMenu }) => {
  return (
    <IconButton sx={{ marginLeft: '1rem' }} onClick={handleOpenUserMenu}>
      <Avatar alt="user avatar" src={personAvatar} sx={{ width: '2rem', height: '2rem' }} />
    </IconButton>
  );
};

export default MenuButton;
