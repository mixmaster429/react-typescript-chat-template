import React, { useState } from 'react';
import { Avatar, List, ListItem, makeStyles, Theme } from '@material-ui/core';
import { IChat } from '../../../../interfaces';
import { faSms } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    height: '100%',
  },
  cardTitle: {
    padding: theme.spacing(1),
  },
}));

const ChatList = (props) => {
  const classes = useStyles();

  const [selectedChatId, setSelectedChatId] = useState('');

  const handleChatClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, chatId: string) => {
    setSelectedChatId(chatId);
    props.onChatClicked(chatId);
  };

  return (
    <div className={classes.root}>
      <Header></Header>
      <List component="nav">
        {props.chats &&
          props.chats.map((chat: IChat, key) => (
            <ListItem
              key={key}
              button
              selected={selectedChatId === chat.chatId}
              onClick={($event) => handleChatClick($event, chat.chatId)}
            >
              <Avatar>
                <FontAwesomeIcon icon={faSms} />
              </Avatar>
              <div className={classes.cardTitle}>{chat.phoneNumber}</div>
            </ListItem>
          ))}
      </List>
      <Footer></Footer>
    </div>
  );
};

export default ChatList;
