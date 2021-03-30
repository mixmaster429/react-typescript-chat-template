import React from 'react';
import { Box, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ( {
  root: {
    width: '100%',
    flexGrow: 1,
    overflow: 'auto',
  },
  chatSent: {
    backgroundColor: theme.palette.primary.main,
    display: 'block',

  }
} ));

const ChatMessages = () => {
  const classes = useStyles();

  return (
    <Box flexGrow={ 1 } flexDirection="column" className={ classes.root }>
    </Box>
  );
};

export default ChatMessages;
