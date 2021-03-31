import React from 'react';
import { Box, makeStyles, Theme } from '@material-ui/core';
import ChatMessage from '../ChatMessage/ChatMessage';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    flexGrow: 1,
    overflow: 'auto',
  },
  chatSent: {
    backgroundColor: theme.palette.primary.main,
    display: 'block',
  },
}));

const ChatMessages = (props) => {
  const classes = useStyles();

  return (
    <Box flexGrow={1} flexDirection="column" className={classes.root}>
      {props.data.messages && (
        <>
          {props.data.messages.map((message, key) => {
            return <ChatMessage key={key} message={message}></ChatMessage>;
          })}
        </>
      )}
    </Box>
  );
};

export default ChatMessages;
