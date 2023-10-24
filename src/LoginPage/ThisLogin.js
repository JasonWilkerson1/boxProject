import React, { useState } from 'react';
import './style.css'; // Import your local CSS file here

const MyLogin = () => {
  const [loginActive, setLoginActive] = useState(true);

  const toggleLoginSignup = () => {
    setLoginActive(!loginActive);
  };

  // Add a state to manage the username and password fields
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleForgotPassword = () => {
    // Redirect to the forgot password page
    // You can use React Router's navigation or simply change the window.location.href
    window.location.href = '/forgot-password'; // Replace with the actual path to your recovery page
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the login logic here (e.g., send a request to the server)

    // For demonstration purposes, we'll log the username and password to the console
    console.log('Username:', username);
    console.log('Password:', password);

    // Reset the form fields
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-wrapper">
    <div className="wrapper">
      <div className="title-text">
        <div className={`title ${loginActive ? 'login' : 'signup'}`}>Account</div>
        <div className={`title ${loginActive ? 'signup' : 'login'}`}>Account</div>
      </div>
      <div className="form-container">
        <div className="slide-controls">
          <input type="radio" name="slide" id="login" checked={loginActive} readOnly />
          <input type="radio" name="slide" id="signup" checked={!loginActive} readOnly />
          <label
            onClick={toggleLoginSignup}
            htmlFor={loginActive ? 'signup' : 'login'}
            className={`slide ${loginActive ? 'login' : 'signup'}`}
          >
            {loginActive ? 'Login' : 'SignUp'}
          </label>
          <div className="slider-tab"></div>
        </div>
        <div className="form-inner">
          <form onSubmit={handleSubmit} className={loginActive ? 'login' : 'signup'}>
            {/* Username Field */}
            <div className="field">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
                required
              />
            </div>

            {/* Password Field */}
            <div className="field">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>

            {/* Forgot Password Button */}
            <div className="pass-link">
              <button onClick={handleForgotPassword}>Forgot Password?</button>
            </div>

            {/* Login Button */}
            <div className="field btn">
              <div className="btn-layer"></div>
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MyLogin;