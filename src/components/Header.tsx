import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyled = makeStyles({
  app_bar: {
    boxShadow: 'none',
    backgroundColor: '#f1f2f7',
    color: '#282828',
  },
  tool_bar: {
    padding: 0,
  },
});

export const Header: React.FC = () => {
  const classes = useStyled();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={classes.app_bar}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Todo
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
