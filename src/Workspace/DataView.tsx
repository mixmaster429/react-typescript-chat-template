import React from 'react';
import { makeStyles, Theme, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ( {
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  }
} ));
const DataView = (prop) => {
  const classes = useStyles();
  return (
    <div className={ classes.root }>
      <Typography variant="h6">Data</Typography>
      <pre>{ JSON.stringify(prop.data, null, 2) }</pre>
    </div>
  );

};

export default DataView;
