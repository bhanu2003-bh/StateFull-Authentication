import login from '../Models/Login.js';

async function LoginDB(data) {
  try {
    await login.create({
      Email: data.Email,
      Password: data.Password
    });
    console.log("Login created");
  } catch (error) {
    console.error("Error creating login:", error);
    throw new Error('Server Side Error');
  }
}

export default LoginDB;
