// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import FormLogin from 'src/components/FormLogin';
import FormSignup from 'src/components/FormSignup';

// == Composant
const App = () => (
  <div className="app">
    <FormLogin />
    <FormSignup />
  </div>
);

// == Export
export default App;
