import React from 'react';
import { makeStyles } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './../css/fonts.css';

const useStyles = makeStyles((theme) => ({
  seeMore: {
    margin: '10px auto',
    color: '#5A2120',
    fontSize: '15px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px',
    },
  }
}));

const SeeMore = () => {
  const classes = useStyles();
  return (
    <div className={classes.seeMore}>
      Ver más <FontAwesomeIcon icon={faArrowRight} />{' '}
    </div>
  );
};

export default SeeMore;
