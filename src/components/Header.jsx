import * as React from 'react';
import { styled } from '@mui/material/styles';
import {AppBar, Toolbar, Typography, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


const HeadBar = styled(AppBar)`
    z-index: 1201;
    background: #fff;
    height:70px;
    box-shadow: inset 1px 1px 0 rgb(0 0 0 / 10%), inset 0 -1px 0 rgb(0 0 0 / 20%);

`;

const Heading = styled(Typography)`
    color: #5F6368;
    font-size: 24px;
    margin-left: 25px;
`;

const Header = ({ open, handleDrawer }) => {
    const logo = "https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
  return (
    <HeadBar open={open}>
        <Toolbar>
          <IconButton
            onClick={handleDrawer}
            edge="start"
            sx={{marginRight: '20px'}}
            >
            <MenuIcon />
          </IconButton>
          <img src={logo} alt="logo" />
          <Heading>Keep</Heading>
        </Toolbar>
      </HeadBar>
  )
}

export default Header;