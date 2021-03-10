import { makeStyles } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './../css/fonts.css';

const useStyles = makeStyles((theme) => ({
  menu: {
    margin: '0 15px',
    fontSize: '35px',
    background: 'none',
    border: 'none',
    color: '#5A2120',
    outline: 'none',
    display: 'block',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

const User = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <button className={classes.menu} onClick={props.changeShow}>
        {!props.show ? (
          <FontAwesomeIcon icon={faBars} />
        ) : (
          <FontAwesomeIcon icon={faTimes} />
        )}
      </button>
    </React.Fragment>
  );
};

export default User;
