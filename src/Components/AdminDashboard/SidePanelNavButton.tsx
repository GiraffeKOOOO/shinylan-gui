import { FC } from 'react';
import { ListItemButton, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router';
import { FaChartPie } from 'react-icons/fa';
import { AdminDashboardTabs } from 'Components/Shared/Types';
import { FaHome } from 'react-icons/fa';
import { IoCalendarSharp } from 'react-icons/io5';
import { AiFillProduct } from 'react-icons/ai';
import { IoTicket } from 'react-icons/io5';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { MdFastfood } from 'react-icons/md';
import { FaTshirt } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import Colours from 'Components/Shared/Colours';
import AdminLocationSwitch from 'Components/AdminDashboard/AdminLocationSwitch';

type SidePanelNavButtonProps = {
  darkMode: boolean;
  button: AdminDashboardTabs;
  drawerHidden: boolean;
};

const drawerHiddenButtonStyle = {
  marginLeft: 'auto',
  marginRight: 'auto',
};

const drawerExpandedButtonStyle = {
  marginRight: '0.5rem',
  marginTop: 'auto',
  marginBottom: 'auto',
};

const iconSwitch = (darkMode: boolean, button: AdminDashboardTabs, drawerHidden: boolean) => {
  switch (button) {
    case AdminDashboardTabs.Overview:
      return drawerHidden ? (
        <FaChartPie
          size={25}
          color={darkMode ? Colours.darkText : Colours.lightText}
          style={drawerHiddenButtonStyle}
        />
      ) : (
        <FaChartPie
          size={18}
          color={darkMode ? Colours.darkText : Colours.lightText}
          style={drawerExpandedButtonStyle}
        />
      );
    case AdminDashboardTabs.Events:
      return drawerHidden ? (
        <IoCalendarSharp
          size={25}
          color={darkMode ? Colours.darkText : Colours.lightText}
          style={drawerHiddenButtonStyle}
        />
      ) : (
        <IoCalendarSharp
          size={18}
          color={darkMode ? Colours.darkText : Colours.lightText}
          style={drawerExpandedButtonStyle}
        />
      );
    case AdminDashboardTabs.Venues:
      return drawerHidden ? (
        <FaHome
          size={25}
          color={darkMode ? Colours.darkText : Colours.lightText}
          style={drawerHiddenButtonStyle}
        />
      ) : (
        <FaHome
          size={18}
          color={darkMode ? Colours.darkText : Colours.lightText}
          style={drawerExpandedButtonStyle}
        />
      );
    case AdminDashboardTabs.EventProducts:
      return drawerHidden ? (
        <AiFillProduct
          size={25}
          color={darkMode ? Colours.darkText : Colours.lightText}
          style={drawerHiddenButtonStyle}
        />
      ) : (
        <AiFillProduct
          size={18}
          color={darkMode ? Colours.darkText : Colours.lightText}
          style={drawerExpandedButtonStyle}
        />
      );
    case AdminDashboardTabs.AllOrders:
      return drawerHidden ? (
        <MdOutlineShoppingCart
          size={25}
          color={darkMode ? Colours.darkText : Colours.lightText}
          style={drawerHiddenButtonStyle}
        />
      ) : (
        <MdOutlineShoppingCart
          size={18}
          color={darkMode ? Colours.darkText : Colours.lightText}
          style={drawerExpandedButtonStyle}
        />
      );
    case AdminDashboardTabs.Tickets:
      return drawerHidden ? (
        <IoTicket
          size={25}
          color={darkMode ? Colours.darkText : Colours.lightText}
          style={drawerHiddenButtonStyle}
        />
      ) : (
        <IoTicket
          size={18}
          color={darkMode ? Colours.darkText : Colours.lightText}
          style={drawerExpandedButtonStyle}
        />
      );
    case AdminDashboardTabs.Addons:
      return drawerHidden ? (
        <MdFastfood
          size={25}
          color={darkMode ? Colours.darkText : Colours.lightText}
          style={drawerHiddenButtonStyle}
        />
      ) : (
        <MdFastfood
          size={18}
          color={darkMode ? Colours.darkText : Colours.lightText}
          style={drawerExpandedButtonStyle}
        />
      );
    case AdminDashboardTabs.Merchandise:
      return drawerHidden ? (
        <FaTshirt
          size={25}
          color={darkMode ? Colours.darkText : Colours.lightText}
          style={drawerHiddenButtonStyle}
        />
      ) : (
        <FaTshirt
          size={18}
          color={darkMode ? Colours.darkText : Colours.lightText}
          style={drawerExpandedButtonStyle}
        />
      );
    case AdminDashboardTabs.Users:
      return drawerHidden ? (
        <FaUserCircle
          size={25}
          color={darkMode ? Colours.darkText : Colours.lightText}
          style={drawerHiddenButtonStyle}
        />
      ) : (
        <FaUserCircle
          size={18}
          color={darkMode ? Colours.darkText : Colours.lightText}
          style={drawerExpandedButtonStyle}
        />
      );
    default:
      return <FaHome />;
  }
};

const SidePanelNavButton: FC<SidePanelNavButtonProps> = ({ darkMode, button, drawerHidden }) => {
  const navigate = useNavigate();
  return (
    <ListItemButton sx={{ marginY: 'auto' }} onClick={() => AdminLocationSwitch(button, navigate)}>
      {drawerHidden && iconSwitch(darkMode, button, drawerHidden)}
      {!drawerHidden && (
        <>
          {iconSwitch(darkMode, button, drawerHidden)}
          <ListItemText>{button}</ListItemText>
        </>
      )}
    </ListItemButton>
  );
};

export default SidePanelNavButton;
