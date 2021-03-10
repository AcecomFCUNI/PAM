import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './../css/fonts.css';

const useStyles = makeStyles(() => ({
  election: {
    border: '1px solid #5A2120',
    margin:'0',
    width: '170px',
    height: '155px',
    color: '#5A2120',
    fontSize: '14px',
    fontFamily: 'Rubik, sans-serif',
    padding: '15px',
    background: 'none',
    borderRadius: '10px',
    outline: 'none',
    transition: '.4s',
    '&:hover': {
      background: '#5A2120',
      color: '#FFEFC9',
      cursor: 'pointer',
    },
  },
}));

const Election = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const goTolists = () =>{
    let index = props.index;
    history.push(`/elections/${index}/lists`)
  }
  return (
    <button className={classes.election} onClick={goTolists}>
      {props.text}
    </button>
  );
};

export default Election;
