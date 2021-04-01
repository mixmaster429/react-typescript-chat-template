import React, { useState, useEffect } from 'react';
import { Avatar, List, ListItem, makeStyles, Theme, Chip } from '@material-ui/core';
import { IChat } from '../../../../interfaces';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    height: '100%',
  },
  cardTitle: {
    padding: theme.spacing(1),
  },
  margin: {
    margin: 0,
  },
  incoming: {
    fontSize: 26,
    textAlign: 'center',
    margin: 0,
  },
}));

const ChatList = (props) => {
  const classes = useStyles();

  const [selectedChatId, setSelectedChatId] = useState(props.selectedChatdata.chatId);
  const [hasincoming, setHasincoming] = useState(false);
  const { filter } = props;
  console.log(filter);

  const handleChatClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, chatId: string) => {
    setSelectedChatId(chatId);
    props.handleChatClicked(chatId);
  };

  const getinitials = (name) => {
    if (name)
      return name
        .match(/(^\S\S?|\b\S)?/g)
        .join('')
        .match(/(^\S|\S$)?/g)
        .join('')
        .toUpperCase();
  };

  useEffect(() => {
    setSelectedChatId(props.selectedChatdata.chatId);
  }, [props.selectedChatdata]);

  useEffect(() => {
    setHasincoming(false);
    if (props.chatData)
      props.chatData.map((item, key) => {
        if (!item.lastMessage) {
          setHasincoming(true);
        }
        return true;
      });
  }, [props.chatData]);

  const checkfilter = (chat) => {
    if (filter.category) {
      console.log(filter.category);
      switch (filter.category) {
        case 'topic':
          if (chat.topic === filter.criteria) return true;
          else return false;

        case 'senderid':
          if (chat.senderId === filter.criteria) return true;
          else return false;

        case 'channel':
          if (chat.channel === filter.criteria) return true;
          else return false;
      }
    }
    return true;
  };

  return (
    <div className={classes.root}>
      <Header {...props}></Header>
      <List component="nav">
        {props.chatData &&
          props.chatData.map((chat: IChat, key) => (
            <>
              {chat.lastMessage && checkfilter(chat) ? (
                <ListItem
                  key={key}
                  button
                  selected={selectedChatId === chat.chatId}
                  onClick={($event) => handleChatClick($event, chat.chatId)}
                >
                  <Avatar>{getinitials(chat.senderId)}</Avatar>
                  <div className={classes.cardTitle}>
                    <p className={classes.margin}>
                      <Chip size="small" label={chat.channel} color="primary" />
                      <Chip variant="outlined" color="primary" size="small" label={chat.status} />
                    </p>
                    <p className={classes.margin}>
                      {chat.lastMessage ? chat.lastMessage.content : ' '}
                    </p>
                  </div>
                </ListItem>
              ) : (
                <></>
              )}
            </>
          ))}
      </List>

      {hasincoming && (
        <List component="nav">
          <p className={classes.incoming}>Incoming...</p>
        </List>
      )}

      <List component="nav">
        {props.chatData &&
          props.chatData.map((chat: IChat, key) => (
            <>
              {!chat.lastMessage && checkfilter(chat) ? (
                <ListItem
                  key={key}
                  button
                  selected={selectedChatId === chat.chatId}
                  onClick={($event) => handleChatClick($event, chat.chatId)}
                >
                  <Avatar>{getinitials(chat.senderId)}</Avatar>
                  <div className={classes.cardTitle}>
                    <p className={classes.margin}>
                      <Chip size="small" label={chat.channel} color="primary" />
                      <Chip variant="outlined" color="primary" size="small" label={chat.status} />
                    </p>
                  </div>
                </ListItem>
              ) : (
                <></>
              )}
            </>
          ))}
      </List>
      <Footer {...props}></Footer>
    </div>
  );
};

export default ChatList;
