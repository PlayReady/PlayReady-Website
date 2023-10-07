import React, {useContext, useState} from 'react';
import TextInput from '../../components/textinput/TextInput';
import Button from '../../components/button/Button';
import './Login.css';
import {AuthContext} from '../../context/AuthContext';
import ErrorText from '../../components/error/ErrorText';

function Login() {
  const {login} = useContext(AuthContext);
  const [credentials, setCredentials] = useState({username: '', password: ''});
  const [error, setError]=useState('');
  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setCredentials({...credentials, [name]: value});
  };

  async function handleSubmit() {
    try {
      await login(credentials);
    } catch (e) {
      console.error(e);
      setError('Something went wrong.');
    }
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
          password
          name="password"
          placeholder="Wachtwoord"
          onchange={handleInputChange}
          value={credentials.password}
        />
        {error &&<ErrorText>{error}</ErrorText>}
        <Button

          onclick={handleSubmit}
        >Log in</Button>
      </div>
    </div>
  );
}

export default Login;
