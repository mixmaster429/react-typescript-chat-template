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

  const dummyChats: IChat[] = [
    {
      chatId: uuid(),
      channel: 'SMS',
      phoneNumber: '15551234567',
      currentResponders: [],
      status: 'Open',
      messages: [],
      commsType: 'Chat',
      createdAt: DateTime.local(),
    },
    {
      chatId: uuid(),
      channel: 'SMS',
      phoneNumber: '15559876543',
      currentResponders: [],
      status: 'Open',
      messages: [],
      commsType: 'Chat',
      createdAt: DateTime.local(),
    },
  ];

  const handleChatClicked = (chatId: string) => {
    // TODO
    console.log('TODO');
  };

  return (
    <div className={classes.root}>
      <ChatList chats={dummyChats} onChatClicked={handleChatClicked} />
      <ChatConversation data={props.data} sendmessage={props.sendmessage}/>
    </div>
  );
};

export default Chat;
