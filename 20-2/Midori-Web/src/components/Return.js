import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './../css/fonts.css';

const useStyles = makeStyles(() => ({
  returnB: {
    padding: '8px 25px 11px',
    border: '1px solid #D1C19A',
    borderRadius: '5px',
    background: '#D1C19A',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '15px',
    color: 'white',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

const Return = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <button className={classes.returnB} onClick={() => history.goBack()}>
      Regresar
    </button>
  );
};

export default Return;
