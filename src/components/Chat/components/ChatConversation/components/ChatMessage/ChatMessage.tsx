import React from 'react';
import { Avatar, makeStyles, Theme } from '@material-ui/core';
import { DateTime } from 'luxon';

const useStyles = makeStyles((theme: Theme) => ({
  message: {
    padding: 10,
    display: 'flex',
  },
  send: {
    flexDirection: 'row-reverse',
  },
  avatar: {
    margin: '10px 0 0 0',
  },
  messagetime: {
    margin: 0,
    fontSize: 12,
  },
  messageitem: {
    maxWidth: '60%',
    margin: '0 15px',
  },
  messagecontent: {
    backgroundColor: '#dddddd',
    padding: 10,
    borderRadius: 10,
    whiteSpace: 'pre-line',
  },
}));

const ChatMessage = (props) => {
  const classes = useStyles();

  const message = props.message;

  return (
    <>
      <div
        className={
          message.authorId === null ? classes.message + ' ' + classes.send : classes.message
        }
      >
        <Avatar className={classes.avatar}>H</Avatar>
        <div className={classes.messageitem}>
          <p className={classes.messagetime}>
            {DateTime.fromISO(message.createdAt).toLocaleString(DateTime.DATETIME_SHORT)}
          </p>
          <div className={classes.messagecontent}>{message.content}</div>
        </div>
      </div>
    </>
  );
};

export default ChatMessage;
