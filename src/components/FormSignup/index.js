// == Import npm
import React from 'react';

// == Import
import './styles.scss';

// == Composant
const FormSignup = () => (
  <form class="form">
    <input className="form-input" type="email" name="email" placeholder="Email"/>
    <input className="form-input" type="password" name="password" placeholder="Password"/>
    <button className="form-button">
      Inscription
    </button>
  </form>
);

// == Export
export default FormSignup;
