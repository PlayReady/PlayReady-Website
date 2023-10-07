export default function registrationValidator(credentials) {
  return credentials.username !== '' &&
      credentials.email !== '' &&
      credentials.phonenumber !== '' &&
      credentials.password === credentials.confirmpassword;
}


