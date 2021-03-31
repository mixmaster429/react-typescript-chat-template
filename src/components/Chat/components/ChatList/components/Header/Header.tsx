import React from 'react';
import {
  makeStyles,
  Theme,
  ClickAwayListener,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel
} from '@material-ui/core';
import { faFilter, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles((theme: Theme) => ({
  dropdown: {
    position: 'absolute',
    top: 60,
    right: 0,
    left: 0,
    zIndex: 1,
    border: '1px solid rgba(0, 0, 0, 0.12)',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    maxWidth: 400,
  },
  margin: {
    margin: '5px 0',
  },
  header: {
    padding: '10px',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  optionbutton: {
    fontSize: '20px',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    borderRadius: '50%',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40px',
    height: '40px',
    marginRight: '10px',
    cursor: 'pointer',
  },
}));

const Header = (props) => {
  const classes = useStyles();

  const [newmessagemodal, setnewmessagemodal] = React.useState(false);
  const [filtermessagemodal, setfiltermessagemodal] = React.useState(false);

  return (
    <>
      <div className={classes.header}>
        <ClickAwayListener
          mouseEvent="onMouseDown"
          touchEvent="onTouchStart"
          onClickAway={() => setnewmessagemodal(false)}
        >
          <div>
            <span
              className={classes.optionbutton}
              onClick={() => setnewmessagemodal((prev) => !prev)}
            >
              <FontAwesomeIcon icon={faPlus} />
            </span>
            {newmessagemodal ? (
              <div className={classes.dropdown}>
                <FormControl fullWidth variant="outlined" className={classes.margin}>
                  <TextField label="User ID" />
                </FormControl>

                <FormControl fullWidth className={classes.margin}>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth variant="outlined" className={classes.margin}>
                  <TextField label="Outlined" size="small" />
                </FormControl>
              </div>
            ) : null}
          </div>
        </ClickAwayListener>

        <ClickAwayListener
          mouseEvent="onMouseDown"
          touchEvent="onTouchStart"
          onClickAway={() => setfiltermessagemodal(false)}
        >
          <div>
            <span
              className={classes.optionbutton}
              onClick={() => setfiltermessagemodal((prev) => !prev)}
            >
              <FontAwesomeIcon icon={faFilter} />
            </span>
            {filtermessagemodal ? (
              <div className={classes.dropdown}>
                Click me, I will stay visible until you click outside.
              </div>
            ) : null}
          </div>
        </ClickAwayListener>

        <span>Current Conversations</span>
      </div>
    </>
  );
};

export default Header;
