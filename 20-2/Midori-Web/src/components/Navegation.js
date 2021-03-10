import { makeStyles } from '@material-ui/core';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './../css/fonts.css';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  navBar: {
    padding: '40px 0 0 0',
    display: 'flex',
    flexDirection: 'column',
    background: '#5A2120',
    position: 'fixed',
    width: '85px',
    left: '0',
    top: '81px',
    height: '100%',
    transition: '.5s',
    [theme.breakpoints.down('xs')]: {
      top: '61px',
      left: '-85px',
    },
    '& button': {
      width: '100%',
      border: 'none',
      background: 'transparent',
      color: '#FFEFC9',
      outline: 'none',
      transition: '.4s',
      padding: '20px',
      fontFamily: 'Merriweather Sans, sans-serif',
      textAlign: 'left',
      fontSize: '17px',
      display: 'flex',
      flexDirection: 'row',
    },
    '& button:hover': {
      background: '#A84F4D',
    },
    '& button div': {
      margin: '10px 0 0',
      display: 'none',
    },
    '&:hover': {
      width: '220px',
    },
    '&:hover button div': {
      display: 'block',
    },
  },
  icon: {
    fontSize: '40px',
    margin: '0 10px 0 0',
  },
}));

const Navegation = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const removeCode = () => {
    localStorage.removeItem('CODEUNI');
    history.push('/');
  };
  return (
    <nav
      className={classes.navBar}
      style={!props.show ? { left: '-85px' } : { left: '0' }}
    >
      <button
        className={classes.buttonNav}
        onClick={() => history.push('/elections')}
      >
        <FontAwesomeIcon icon={faHome} className={classes.icon} />
        <div>Inicio</div>
      </button>
      <button className={classes.buttonNav} onClick={removeCode}>
        <FontAwesomeIcon icon={faSignOutAlt} className={classes.icon} />
        <div>Cambiar código</div>
      </button>
    </nav>
  );
};

export default Navegation;
