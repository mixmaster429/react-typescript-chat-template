import {
  makeStyles,
  Theme,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@material-ui/core';

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
  buttonmargin: {
    margin: '5px',
  },
}));

const FilterchatModal = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.dropdown}>
      <FormControl fullWidth className={classes.margin}>
        <InputLabel>Category</InputLabel>
        <Select>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth variant="outlined" className={classes.margin}>
        <TextField label="Filter criteria" size="small" />
      </FormControl>

      <Button variant="contained" color="primary" className={classes.buttonmargin}>
        Send
      </Button>

      <Button variant="contained" color="primary" className={classes.buttonmargin}>
        Apply
      </Button>
    </div>
  );
};

export default FilterchatModal;
