import React from 'react';
import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    position: 'absolute',
    bottom: 0,
  },
}));

const Footer = () => {
  const classes = useStyles();

  return <div className={classes.footer}>Footer</div>;
};

export default Footer;
