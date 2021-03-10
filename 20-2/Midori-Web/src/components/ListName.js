import { makeStyles } from '@material-ui/core';
import React from 'react';
import './../css/fonts.css';

const useStyles = makeStyles((theme) => ({
  listName: {
    width: '85px',
    height: '85px',
    border: '3px solid #5A2120',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '70px',
    fontWeight: 'bold',
    [theme.breakpoints.down('xs')]: {
      margin: '0 0 0 5px',
    },
  },
}));

const ListName = (props) => {
  const classes = useStyles();
  return <div className={classes.listName}>{props.list}</div>;
};

export default ListName;
