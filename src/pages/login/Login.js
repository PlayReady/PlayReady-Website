import React, {useContext, useState} from 'react';
import TextInput from '../../components/textinput/TextInput';
import Button from '../../components/button/Button';
import './Login.css';
import {AuthContext} from '../../context/AuthContext';

function Login() {
  const {login} = useContext(AuthContext);
  const [credentials, setCredentials] = useState({username: '', password: ''});

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setCredentials({...credentials, [name]: value});
  };

  function handleSubmit() {
    login(credentials);
  }
  return (
    <div className="loginPage">
      <div className="container">
        <h1>Log in</h1>
        <TextInput
          name="username"
          placeholder="gebruikersnaam"
          onchange={handleInputChange}
          value={credentials.username}
        />
        <TextInput
          name="password"
          placeholder="Wachtwoord"
          onchange={handleInputChange}
          value={credentials.password}
        />
        <Button onclick={handleSubmit}>Log in</Button>
      </div>
    </div>
  );
}

export default Login;
