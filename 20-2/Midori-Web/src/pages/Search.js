import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import Election from 'components/Election';
import Navegation from 'components/Navegation';
import Header from 'components/Header';
import 'css/fonts.css';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  search: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    margin: '80px 0 0 85px',
    padding: '25px 20px 0 60px',
    '& *': {
      fontFamily: 'Rubik, sans-serif',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '60px 25px 0',
      padding: '25px 10px 0',
    },
  },
  info: {
    '& strong': {
      color: '#A72C2C',
    },
  },
  electionTitle: {
    margin: '15px 0 0',
    padding: '1px 0 0 5px',
    borderLeft: '3px solid #5A2120',
  },
  electionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '30px 0 0',
    width: '80%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  elections: {
    width: '40%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& div': {
      margin: '10px',
    },
    [theme.breakpoints.down('md')]: {
      width: '80%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  imgCont: {
    width: '400px',

    '& img': {
      width: '100%',
      opacity: '0.2',
    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}));
const typeOfElection = [
  'ELECCIONES RECTORALES 2021',
  'ELECCIONES DE DECANOS',
  'ELECCIONES ASAMBLEA DE DOCENTES',
  'ELECCIONES DE CONSEJO DE FACULTAD',
];
const Search = () => {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const changeShow = () => {
    setShow(!show);
  };
  return (
    <React.Fragment>
      <Header changeShow={changeShow} show={show} seeMenu={true} />
      <div className={classes.search}>
        <Navegation changeShow={changeShow} show={show} />
        <div className={classes.searchTitle}> Bienvenido DIEGO </div>
        <div className={classes.info}>
          Informate sobre tus candidatos en las proximas elecciones para tener
          un <strong>VOTO CONSCIENTE</strong>
        </div>
        <div className={classes.electionTitle}>
          Usted participa en las siguientes elecciones
        </div>
        <div className={classes.electionsContainer}>
          <div className={classes.elections}>
            {typeOfElection.map((e, index) => {
              return (
                <div key={e}>
                  <Election text={e} index={index} />
                </div>
              );
            })}
          </div>
          <div className={classes.imgCont}>
            <img src="https://i.ibb.co/YXhrdmC/UNI-logo.png" alt="logo uni" />
          </div>
        </div>
      </div>

      {localStorage.getItem('CODEUNI') ? '' : <Redirect to="/" />}
    </React.Fragment>
  );
};

export default Search;
