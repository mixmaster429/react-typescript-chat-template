import React from 'react';
import { Box, makeStyles, Theme, Avatar } from '@material-ui/core';
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
  header: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    padding: 10,
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    margin: '0 5px',
  },
}));

const ChatMessages = (props) => {
  const classes = useStyles();

  const getinitials = (name) => {
    if (name)
      return name
        .match(/(^\S\S?|\b\S)?/g)
        .join('')
        .match(/(^\S|\S$)?/g)
        .join('')
        .toUpperCase();
  };

  return (
    <Box flexGrow={1} flexDirection="column" className={classes.root}>
      {Object.keys(props.selectedChatdata).length > 0 && (
        <div className={classes.header}>
          <Avatar className={classes.avatar}>{getinitials(props.selectedChatdata.senderId)}</Avatar>
          {props.selectedChatdata.senderId}
        </div>
      )}
      {props.selectedChatdata.messages && (
        <>
          {props.selectedChatdata.messages.map((message, key) => {
            return <ChatMessage key={key} message={message}></ChatMessage>;
          })}
        </>
      )}
    </Box>
  );
};

export default ChatMessages;
