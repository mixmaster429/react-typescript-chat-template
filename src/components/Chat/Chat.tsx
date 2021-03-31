import { makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import ChatList from './components/ChatList/ChatList';
import ChatConversation from './components/ChatConversation/ChatConversation';
import { v4 as uuid } from 'uuid';
import { IChat } from '../../interfaces';
import { DateTime } from 'luxon';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    flexGrow: 1,
    outline: '1px solid ' + theme.palette.divider,
  },
}));

const Chat = (props) => {
  const classes = useStyles();

  const { selectedChatdata, chatData } = props;

  return (
    <div className={classes.root}>
      <ChatList chats={chatData} newchat={props.newchat} onChatClicked={props.handleChatClicked} />
      <ChatConversation data={selectedChatdata} sendmessage={props.sendmessage} />
    </div>
  );
};

export default Chat;
