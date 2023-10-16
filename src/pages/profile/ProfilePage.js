import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../../context/AuthContext';
import './ProfilePage.css';
import TextInput from '../../components/textinput/TextInput';
import Button from '../../components/button/Button';
import axios from 'axios';
import Loader from '../../components/loader/Loader';

function ProfilePage() {
  const [loading, setLoading] = useState(false);
  const {getUser, isAuth, getUserInfo, getToken}=useContext(AuthContext);
  const [userInfo, setUserInfo]=useState(
      {
        username: '',
        email: '',
        phonenumber: '',
      },
  );
  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setUserInfo({...userInfo, [name]: value});
  };

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const userData = await getUserInfo();
        setUserInfo(userData);
      } catch (error) {
        setError('Error fetching user data');
      }
    }

    if (isAuth) {
      fetchUserInfo();
    }
  }, [isAuth]);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    try {
      await axios.patch('http://localhost:8080/users/'+getUser(),
          {
            username: userInfo.username,
            email: userInfo.email,
            phonenumber: userInfo.phonenumber,
          },
          {
            headers: {
              Authorization: `Bearer `+getToken(),
            },
          },
      );
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }

  return (
    <div className='profilePage'>
      <form className='profile' onSubmit={handleSubmit}>
        <h2>Profile</h2>
        <div className='profile-field'>
          <h3>Naam:</h3>
          <TextInput
            name="username"
            value={userInfo.username}
            onchange={handleInputChange}
          />
        </div>
        <div className='profile-field'>
          <h3>Email:</h3>
          <TextInput
            name="email"
            value={userInfo.email}
            onchange={handleInputChange}
          />
        </div>
        <div className='profile-field'>
          <h3>Tel:</h3>
          <TextInput
            name="phonenumber"
            value={userInfo.phonenumber}
            onchange={handleInputChange}
          />
        </div>
        <Button
          type="submit"
        >
          {loading ? <Loader/> :'opslaan'}
        </Button>
      </form>
    </div>
  );
}

export default ProfilePage;
