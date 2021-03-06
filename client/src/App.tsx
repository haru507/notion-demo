import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles, Theme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Router from "./Router";
import { LoadingIcon } from './components/UIKit'
import { Header, Sidebar } from './components';

const drawerWidth: number = 240;
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const App = () => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState<boolean>(true);

  const handleDrawerOpen = (): void => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <LoadingIcon>
      <div className={classes.root}>
        <CssBaseline />
        <Header open={drawerOpen} onChange={handleDrawerOpen} />
        <Sidebar open={drawerOpen} onChange={handleDrawerOpen}  />
        <main
          className={clsx(classes.content, {
              [classes.contentShift]: drawerOpen,
          })}
        >
            <div className={classes.drawerHeader} />
            <Router />
        </main>
      </div>
    </LoadingIcon>
  );
};

export default App;