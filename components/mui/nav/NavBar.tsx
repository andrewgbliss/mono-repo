import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  Menu,
  Button,
  Grid,
  Box,
  useScrollTrigger,
  useTheme,
  Slide,
  useMediaQuery,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

interface ScrollProps {
  children: React.ReactElement;
  showLogin?: boolean;
}

const HideOnScroll: React.FC<ScrollProps> = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

// const ColorButton = withStyles((theme) => ({
//   root: {
//     color: theme.palette.getContrastText(lightBlue[500]),
//     backgroundColor: lightBlue[100],
//     '&:hover': {
//       backgroundColor: lightBlue[700],
//     },
//   },
// }))(IconButton);

interface NavLinkProps {
  href: string;
  children: string;
}

const NavLink: React.FC<NavLinkProps> = (props) => {
  const { href, children } = props;
  return (
    <Box pl={1}>
      <Button href={href} style={{ color: '#fff' }} component="a">
        {children}
      </Button>
    </Box>
  );
};

interface MenuLinkProps {
  href: string;
  children: string;
}

const MenuLink: React.FC<MenuLinkProps> = (props) => {
  const { href, children, ...rest } = props;
  return (
    <MenuItem component="a" href={href} {...rest}>
      {children}
    </MenuItem>
  );
};

export const NavBar: React.FC = () => {
  const [menu, setMenu] = useState<null | HTMLElement>(null);
  const open: boolean = Boolean(menu);
  const handleOpen = (e: React.MouseEvent<HTMLElement>) =>
    setMenu(e.currentTarget);
  const handleClose = () => setMenu(null);
  const theme = useTheme();
  const mobile: boolean = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
      <HideOnScroll>
        <AppBar
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <Toolbar>
            <Grid container justifyContent="space-between">
              {mobile && (
                <Grid item>
                  <Box p={1}>
                    <IconButton onClick={handleOpen}>
                      <MenuIcon />
                    </IconButton>
                  </Box>
                  <Menu
                    anchorEl={menu}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuLink href="#home">Home</MenuLink>
                    <MenuLink href="#about">About</MenuLink>
                    <MenuLink href="#features">Features</MenuLink>
                    <MenuLink href="#pricing">Pricing</MenuLink>
                  </Menu>
                </Grid>
              )}
              <Grid item>
                <Box p={2} color="white">
                  <Grid container>Website Name</Grid>
                </Box>
              </Grid>
              {!mobile && (
                <Grid item>
                  <Box p={2}>
                    <Grid container>
                      <NavLink href="#home">Home</NavLink>
                      <NavLink href="#about">About</NavLink>
                      <NavLink href="#features">Features</NavLink>
                      <NavLink href="#pricing">Pricing</NavLink>
                    </Grid>
                  </Box>
                </Grid>
              )}
            </Grid>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
};
