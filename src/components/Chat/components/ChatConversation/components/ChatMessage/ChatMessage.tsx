import React from 'react';
import { Avatar, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  message: {
    padding: 10,
    display: 'flex',
  },
  avatar: {
    marginRight: 15,
  },
  messageitem: {
    maxWidth: '60%',
  },
  messagecontent: {
    backgroundColor: '#dddddd',
    padding: 10,
    borderRadius: 10,
    whiteSpace: 'pre',
  },
}));

const ChatMessage = (props) => {
  const classes = useStyles();

  const message = props.message;

  return (
    <>
      <div className={classes.message}>
        <Avatar className={classes.avatar}>H</Avatar>
        <div className={classes.messageitem}>
          <div className={classes.messagecontent}>{message.content}</div>
        </div>
      </div>
    </>
  );
};

export default ChatMessage;
