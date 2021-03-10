import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Navegation, Return, ListName, Header } from 'components';
import 'css/fonts.css';
import { Redirect, useParams } from 'react-router-dom';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  dataContainer: {
    margin: '80px 20px 0  85px ',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      margin: '60px 10px',
    },
  },
  titleElection: {
    margin: '20px 0 0',
    textAlign: 'center',
    fontSize: '40px',
    fontFamily: 'Rubik, sans-serif',
    fontWeight: 'bold',
  },
  dataMember: {
    width: '75%',
    padding: '10px 0 0',
    background: 'white',
    margin: '20px auto 0',
    border: '1px solid #5A2120',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      width: '95%',
    },
  },
  headerData: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '95%',
    margin: '10px auto',
    paddingBottom: '5px',
    borderBottom: '2px solid #D1C19A',
  },
  imgCont: {
    width: '90px',
    '& img': {
      width: '100%',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '0 5px 0',
    },
  },
  generalData: {
    width: '95%',
    margin: '10px auto',
    display: 'flex',
    justifyContent: 'left',
    '& div': {
      color: '#5A2120',
      borderBottom: '2px solid #5A2120',
      margin: '10px 0 5px',
    },
  },
  infoMember: {
    width: '95%',
    margin: '0 auto 40px',
    background: '#FFEFC9',
    padding: '0 0 20px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '10px',
    },
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    margin: '15px 15px 0',
    borderBottom: '1px solid #C4C4C4',
    color: '#5A2120',
    '& div': {
      margin: '0 5px',
    },
  },
  returnCont: {
    margin: '40px auto',
  },
}));

const typeOfElection = [
  'ELECCIONES RECTORALES 2021',
  'ELECCIONES DE DECANOS',
  'ELECCIONES ASAMBLEA DE DOCENTES',
  'ELECCIONES DE CONSEJO DE FACULTAD',
];

const Member = () => {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const [dataUNI, setDataUNI] = useState([]);
  const changeShow = () => {
    setShow(!show);
  };
  const { election, list, member } = useParams();
  useEffect(() => {
    if (dataUNI.length === 0) {
      axios
        .get(
          'https://raw.githubusercontent.com/diegosv2000/midori-data/main/data.json'
        )
        .then((res) => {
          //setDataUNI(res.data);
          res.data.map((e) => {
            if (member == e.code) {
              setDataUNI(e);
            }
          });
        });
    }
  }, [dataUNI]);
  return (
    <React.Fragment>
      <Header changeShow={changeShow} show={show} seeMenu={true} />
      <Navegation changeShow={changeShow} show={show} />
      <div className={classes.dataContainer}>
        <div className={classes.titleElection}>{typeOfElection[election]}</div>

        <div className={classes.dataMember}>
          <div className={classes.headerData}>
            <div className={classes.imgCont}>
              <img src={dataUNI.photo} alt="perfil" />
            </div>
            <ListName list={list} />
          </div>
          <div className={classes.generalData}>
            <div>DATOS GENERALES</div>
          </div>

          <div className={classes.infoMember}>
            <div className={classes.row}>
              <div className={classes.fullName}>
                <strong>Apellidos y Nombres: </strong> {dataUNI.name}
                {dataUNI.lname}
              </div>
              <div className={classes.gender}>
                <strong>Sexo: </strong> {dataUNI.gender}
              </div>
            </div>
            <div className={classes.row}>
              <div className={classes.codeMember}>
                <strong>Código: </strong>
                {dataUNI.code}
              </div>
              <div className={classes.professionMember}>
                <strong>Carrera: </strong>
                {dataUNI.specialty}
              </div>
              <div className={classes.conditionMember}>
                <strong>Condición: </strong>
                {dataUNI.condition}
              </div>
            </div>
            <div className={classes.row}>
              <div className={classes.facultyMember}>
                <strong>Facultad: </strong>
                {dataUNI.faculty}
              </div>
            </div>
            <div className={classes.row}>
              <div className={classes.apply}>
                <strong>Cargo al que postula: </strong> PRESIDENTE DE CONSEJO
              </div>
            </div>
          </div>
        </div>

        <div className={classes.returnCont}>
          <Return />
        </div>
      </div>
      {localStorage.getItem('CODEUNI') ? '' : <Redirect to="/" />}
    </React.Fragment>
  );
};

export default Member;
