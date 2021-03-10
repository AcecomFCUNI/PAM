import { makeStyles } from '@material-ui/core';
import React from 'react';
import SeeMore from './SeeMore';
import './../css/fonts.css';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  list: {
    margin: '20px 70px',
    width: '200px',
    height: '250px',
    display: 'flex',
    flexDirection: 'column',
    border: '2px solid #D1C19A',
    outline: 'none',
    borderRadius: '10px',
    transition: '.4s',
    '& .pillar': {
      height: '3px',
      width: '48px',
      background: '#D1C19A',
      transition: '.4s',
    },
    '&:hover ': {
      border: '2px solid #5A2120',
      cursor: 'pointer',
    },
    '&:hover .pillar': {
      background: '#5A2120',
    },
  },
  titleList: {
    fontWeight: 'bold',
    borderBottom: '3px solid #D1C19A',
    margin: '25px auto 0',
    fontSize: '25px',
  },
  contName: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '15px 0 20px',
  },

  nameList: {
    width: '100px',
    height: '100px',
    border: '3px solid #331212',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '70px',
    fontWeight: 'bold',
  },
  buttonContainer: {
    margin: '0px auto',
  },
}));

const List = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const goToMembers = () => {
    history.push(`/elections/${props.election}/lists/${props.list}`);
  };
  return (
    <button className={classes.list} onClick={goToMembers}>
      <div className={classes.titleList}>LISTA</div>

      <div className={classes.contName}>
        <div className="pillar"></div>
        <div className={classes.nameList}>{props.list}</div>
        <div className="pillar"></div>
      </div>

      <div className={classes.buttonContainer}>
        <SeeMore />
      </div>
    </button>
  );
};

export default List;
