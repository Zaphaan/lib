// == Import npm
import React from 'react';

// == Import
import './styles.scss';

// == Composant
const FormLogin = () => (
  <form class="form">
    <input className="form-input" type="email" name="email" placeholder="Email"/>
    <input className="form-input" type="password" name="password" placeholder="Password"/>
    <button className="form-button">
      Se connecter
    </button>
  </form>
);

// == Export
export default FormLogin;
