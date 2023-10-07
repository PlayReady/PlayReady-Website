import React, {useContext, useState} from 'react';
import TextInput from '../../components/textinput/TextInput';
import Button from '../../components/button/Button';
import axios from 'axios';
import {AuthContext} from '../../context/AuthContext';
import Loader from '../../components/loader/Loader';
import './Registration.css';

function Registration(props) {
  const [credentials, setCredentials] = useState({username: '', password: ''});
  const [loading, setLoading] = useState(false);
  const {login} = useContext(AuthContext);

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setCredentials({...credentials, [name]: value});
  };
  async function handleSubmit() {
    setLoading(true);
    try {
      await axios.post('http://localhost:8080/users',
          {
            'username': credentials.username,
            'password': credentials.password,
            'roles': [],
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
          value={credentials.username}
        />
        <TextInput
          name="password"
          placeholder="Wachtwoord"
          onchange={handleInputChange}
          value={credentials.username}
        />
        <TextInput
          name="confirm password"
          placeholder="Wachtwoord bevestigen"
          onchange={handleInputChange}
          value={credentials.password}
        />
        <Button onclick={handleSubmit}>
          {loading ?<Loader/> : 'Registreer'}
        </Button>
      </div>
    </div>
  );
}

export default Registration;
