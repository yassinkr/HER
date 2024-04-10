import React, { useState } from 'react';
import axios from 'axios';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignIn = async () => {
    try {
      const response = await axios.post('http://localhost:5002/user/signin', { email, password });

      if (response.status === 200 && response.data && response.data.success) {
        setMessage('Connexion réussie');
        console.log('Connexion réussie');
      } else {
        setMessage('Erreur lors de la connexion');
        console.log('Connexion échouée');
      }
    } catch (error) {
      setMessage('Erreur lors de la connexion :' + error);
      console.error('Erreur lors de la connexion :', error);
    }
  };

  return (
    <div>
      <h2>Connexion</h2>
      <form onSubmit={handleSignIn}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Mot de passe:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Se connecter</button>
      </form>
      {message && <div>{message}</div>}
    </div>
  );
};

export default SignIn;

