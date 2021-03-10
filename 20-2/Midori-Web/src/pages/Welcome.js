import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import InputForm from 'components/InputForm';
import Header from 'components/Header';
import { isAValidCodeByRule } from './../regex';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  home: {
    textAlign: 'center',
    margin: '130px auto',
    '& form': {
      margin: '60px auto',
      [theme.breakpoints.down('sm')]: {
        margin: '40px auto',
      },
    },
  },
  welcome: {
    fontSize: '70px',
    color: '#5A2120',
    [theme.breakpoints.down('lg')]: {
      fontSize: '60px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '50px',
    },
  },
  info: {
    width: '35%',
    margin: '10px auto',
    fontSize: '18px',
    color: '#464646',
    '& strong': {
      color: '#5A2120',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '85%',
    },
  },
  inputHome: {
    width: '150px',
    margin: '0px auto',
    display: 'flex',
    flexDirection: 'column',
    '& button': {
      margin: '30px auto',
      padding: '10px 25px',
      fontSize: '15px',
      color: 'white',
      background: '#5A2120',
      border: 'none',
      transition: '.3s',
      borderRadius: '5px',
      outline: 'none',
    },
    '& button:hover': {
      background: '#9F4341',
      cursor: 'pointer',
    },
  },
}));

const Welcome = () => {
  const classes = useStyles();
  const history = useHistory();
  const [verifCode, setVerifCode] = useState(false);
  const [codeUni, setCodeUni] = useState('');
  const onChange = (e) => {
    e.preventDefault();
    setCodeUni(e.target.value);
  };
  const SendCode = (e) => {
    e.preventDefault();
    const code = codeUni;
    if (isAValidCodeByRule(code.toUpperCase(), 'uni')) {
      localStorage.setItem('CODEUNI', code);
      history.push('/elections');
    } else {
      setVerifCode(true);
    }
  };
  return (
    <React.Fragment>
      <Header seeMenu={false} />
      <div className={classes.home}>
        <h2 className={classes.welcome}>Bienvenid@</h2>
        <p className={classes.info}>
          a <strong>Voto Informado</strong> UNI, gracias por visitar nuestra
          página web. Este portal te brinda información sobre las hojas de vida,
          experiencia laboral y política de las y los candidatos que participan
          en las Elecciones Generales UNI 2021.
        </p>
        <form className={classes.inputHome} onSubmit={SendCode}>
          <InputForm
            type="text"
            label="CÓDIGO"
            showMessage={verifCode}
            onChange={onChange}
          />
          <button onClick={SendCode}>Ingresar</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Welcome;
