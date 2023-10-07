import React, {useContext, useEffect, useState} from 'react';
import TextInput from '../../components/textinput/TextInput';
import Button from '../../components/button/Button';
import axios from 'axios';
import {AuthContext} from '../../context/AuthContext';
import Loader from '../../components/loader/Loader';
import './Registration.css';
import registrationValidator from './RegistrationValidator';

function Registration() {
  const [credentials, setCredentials] = useState(
      {email: '',
        username: '',
        password: '',
        phonenumber: '',
        confirmpassword: ''},
  );
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const {login} = useContext(AuthContext);
  useEffect(()=> {
    if (registrationValidator(credentials)) {
      setValidated(true);
    } else {
      setValidated(false);
    }
  }, [credentials]);


  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setCredentials({...credentials, [name]: value});
  };
  async function handleSubmit() {
    setLoading(true);
    try {
      await axios.post('http://localhost:8080/register',
          {
            'username': credentials.username,
            'email': credentials.email,
            'phonenumber': credentials.phonenumber,
            'password': credentials.password,
          });
      login(credentials);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }
  return (
    <div className="registration">
      <div className="container">
        <h1>Registreer</h1>
        <TextInput
          name="username"
          placeholder="gebruikersnaam"
          onchange={handleInputChange}
          value={credentials.username}
        />
        <TextInput
          name="email"
          placeholder="e-mail"
          onchange={handleInputChange}
          value={credentials.email}
        />
        <TextInput
          name="phonenumber"
          placeholder="Telefoon nummer"
          onchange={handleInputChange}
          value={credentials.phonenumber}
        />
        <TextInput
          name="password"
          password
          placeholder="Wachtwoord"
          onchange={handleInputChange}
          value={credentials.password}
        />
        <TextInput
          name="confirmpassword"
          password
          placeholder="Wachtwoord bevestigen"
          onchange={handleInputChange}
          value={credentials.confirmpassword}
        />
        <Button
          onclick={handleSubmit}
          disabled={!validated}
        >
          {loading ?<Loader/> : 'Registreer'}
        </Button>
      </div>
    </div>
  );
}

export default Registration;
