import { makeStyles, Theme } from '@material-ui/core';
import ChatMessages from './components/ChatMessages/ChatMessages';
import ChatInput from './components/ChatInput/ChatInput';

const useStyles = makeStyles((theme: Theme) => ( {
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    flexGrow: 1,
    outline: '1px solid ' + theme.palette.divider,
  }
} ));

const ChatConversation = (prop) => {
  const classes = useStyles();

  return (
    <div className={ classes.root }>
      <ChatMessages/>
      <ChatInput/>
    </div>
  );
};

export default ChatConversation;
