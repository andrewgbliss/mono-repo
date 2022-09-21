import { useState } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import {
  Backdrop,
  CircularProgress,
  Box,
  AppBar,
  Toolbar,
  Typography,
  SwipeableDrawer,
  IconButton,
  Divider,
  FormControlLabel,
  Switch,
  FormControl,
  InputLabel,
  Select,
  Input,
  MenuItem,
  Button,
} from '@mui/material';
import { Menu as MenuIcon, AccountCircle } from '@mui/icons-material';
import Theme from '../components/mui/theme/Theme';
import { useFirebase } from '../lib/bid-calculator/firebase';
import { useLanguage } from '../hooks/useLanguage';
import { useDarkMode } from '../hooks/useDarkMode';

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useDarkMode();
  const { strings } = useLanguage();
  return (
    <>Dark Mode</>
    // <FormControlLabel
    //   control={
    //     <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
    //   }
    //   label={strings.darkMode}
    // />
  );
}

function LanguageSelect() {
  const { language, updateLanguage, strings } = useLanguage();
  return (
    <>Language Select</>
    // <FormControl style={{ width: '100%' }}>
    //   <InputLabel id="language-select">{strings.language}</InputLabel>
    //   <Select
    //     labelId="language-select"
    //     value={language}
    //     onChange={(
    //       event: React.ChangeEvent<{
    //         name?: string | undefined;
    //         value: unknown;
    //       }>
    //     ) => setLanguage(String(event.target.value))}
    //     input={<Input name="language" id="language" />}
    //   >
    //     <MenuItem value={'en'}>English</MenuItem>
    //     <MenuItem value={'ja'}>日本語</MenuItem>
    //   </Select>
    // </FormControl>
  );
}

function Drawer() {
  const [open, setOpen] = useState<boolean>(false);
  const { strings } = useLanguage();
  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={() => setOpen(!open)}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor={'left'}
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <Box p={2} width={250}>
          <Box pb={2}>
            <Typography component="h5" variant="h6" align="center">
              {strings.settings}
            </Typography>
          </Box>
          <Divider />
          <Box pt={2}>
            <DarkModeToggle />
          </Box>
          <Box pt={2} pb={4}>
            <LanguageSelect />
          </Box>
          <Divider />
          <Box py={4} textAlign="center">
            <Button variant="contained" color="primary" onClick={() => {}}>
              {strings.logout}
            </Button>
          </Box>
        </Box>
      </SwipeableDrawer>
    </>
  );
}

function User() {
  const user: any = {};
  // const { user } = useFirebase();
  const { strings } = useLanguage();
  if (!user) {
    return (
      <Button color="inherit" onClick={() => {}}>
        {strings.login}
      </Button>
    );
  } else {
    return (
      <>
        <IconButton
          edge="end"
          aria-label={strings.profile}
          aria-haspopup="true"
          color="inherit"
          onClick={() => {}}
        >
          <AccountCircle />
        </IconButton>
        <Box pl={1}>{user?.displayName}</Box>
      </>
    );
  }
}

const Planner: NextPage = () => {
  const { loading } = useFirebase();
  const { strings } = useLanguage();
  if (loading) {
    return (
      <Theme>
        <Backdrop open={true}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </Theme>
    );
  }
  return (
    <Theme>
      <Box flexGrow={1}>
        <AppBar position="static">
          <Toolbar>
            <Box mr={2}>
              <Drawer />
            </Box>
            <Box flexGrow={1}>
              <Link
                href="/"
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                }}
              >
                <Typography variant="h6">{strings.title}</Typography>
              </Link>
            </Box>
            <User />
          </Toolbar>
        </AppBar>
        <div>Planner</div>
      </Box>
    </Theme>
  );
};

export default Planner;
