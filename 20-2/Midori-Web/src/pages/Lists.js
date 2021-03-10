import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import List from 'components/List';
import 'css/fonts.css';
import Navegation from 'components/Navegation';
import Header from 'components/Header';
import { Return } from 'components';
import { Redirect, useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  lists: {
    margin: '81px 20px 0 85px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      margin: '61px 20px 0',
    },
  },
  titleElection: {
    margin: '20px 0 0',
    textAlign: 'center',
    fontSize: '40px',
    fontFamily: 'Rubik, sans-serif',
    fontWeight: 'bold',
    [theme.breakpoints.down('xs')]: {
      fontSize: '30px',
    },
  },
  listsContainer: {
    margin: '25px auto',
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  returnContent: {
    textAlign: 'center',
    margin: '0 0 30px',
  },
}));
const listsOfElection = [1, 2, 3, 4, 5, 6];
const typeOfElection = [
  'ELECCIONES RECTORALES 2021',
  'ELECCIONES DE DECANOS',
  'ELECCIONES ASAMBLEA DE DOCENTES',
  'ELECCIONES DE CONSEJO DE FACULTAD',
];
const Lists = () => {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const { election } = useParams();
  const changeShow = () => {
    setShow(!show);
  };
  return (
    <React.Fragment>
      <Header changeShow={changeShow} show={show} seeMenu={true} />
      <Navegation changeShow={changeShow} show={show} />
      <div className={classes.lists}>
        <div className={classes.titleElection}>{typeOfElection[election]}</div>
        <div className={classes.listsContainer}>
          {listsOfElection.map((e) => {
            return <List key={e} list={e} election={election} />;
          })}
        </div>
        <div className={classes.returnContent}>
          <Return />
        </div>
      </div>
      {localStorage.getItem('CODEUNI') ? '' : <Redirect to="/" />}
    </React.Fragment>
  );
};

export default Lists;
