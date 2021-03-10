import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import 'css/fonts.css';
import Navegation from 'components/Navegation';
import Return from 'components/Return';
import Card from 'components/Card';
import Header from 'components/Header';
import { Redirect, useParams } from 'react-router-dom';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  members: {
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
  subTitleElection: {
    width: '75%',
    margin: '20px auto 0',
    padding: '0 0 0 5px',
    borderLeft: '3px solid #5A2120',
    display: 'flex',
    fontSize: '20px',
    fontWeight: 'bold',
    '& div': {
      width: '25px',
      height: '25px',
      border: '1px solid #5A2120',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0 5px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '15px',
      width: '85%',
    },
  },
  membersContainer: {
    margin: '20px auto ',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '85%',
  },
  cardContainer: {
    margin: '0 25px 35px',
  },
  returnCont: {
    margin: '20px auto',
  },
}));

const typeOfElection = [
  'ELECCIONES RECTORALES 2021',
  'ELECCIONES DE DECANOS',
  'ELECCIONES ASAMBLEA DE DOCENTES',
  'ELECCIONES DE CONSEJO DE FACULTAD',
];
const Members = () => {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const [dataUNI, setDataUNI] = useState([]);
  const changeShow = () => {
    setShow(!show);
  };
  const { election, list } = useParams();
  useEffect(() => {
    if (dataUNI.length === 0) {
      axios
        .get(
          'https://raw.githubusercontent.com/diegosv2000/midori-data/main/data.json'
        )
        .then((res) => {
          setDataUNI(res.data);
        });
    }
  }, [dataUNI]);
  return (
    <React.Fragment>
      <Header changeShow={changeShow} show={show} seeMenu={true} />
      <Navegation changeShow={changeShow} show={show} />
      <div className={classes.members}>
        <div className={classes.titleElection}>{typeOfElection[election]}</div>
        <div className={classes.subTitleElection}>
          Integrantes de la lista <div>{list}</div>{' '}
        </div>
        <div className={classes.membersContainer}>
          {dataUNI.map((e) => {
            return (
              <div key={e.code} className={classes.cardContainer}>
                <Card
                  code={e.code}
                  name={e.name}
                  lname={e.lname}
                  specialty={e.specialty}
                  position="PRESIDENTE"
                  election={election}
                  list={list}
                  photo={e.photo}
                />
              </div>
            );
          })}
        </div>
        <div className={classes.returnCont}>
          <Return />
        </div>
      </div>
      {localStorage.getItem('CODEUNI') ? '' : <Redirect to="/" />}
    </React.Fragment>
  );
};

export default Members;
