import axios from 'axios';
import React from 'react';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      isAdmin: false
    };
  }

  handleLoginChange = event => {
    this.setState({ login: event.target.value });
  }

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const authenticationRequest = {
      login: this.state.login,
      password: this.state.password
    };

    axios.post('http://localhost:8080/user-management-service/authenticateUser', authenticationRequest)
      .then(response => {
        const isAdmin = response.data.isAdmin;
        this.setState({ isAdmin });
      })
      .catch(error => {
        console.error('Une erreur s\'est produite lors de l\'appel au service web :', error);
      });
  }

  render() {
    return (
      <div>
        <h1>Application de gestion des utilisateurs</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Login:
            <input type="text" value={this.state.login} onChange={this.handleLoginChange} />
          </label>
          <br />
          <label>
            Mot de passe:
            <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
          </label>
          <br />
          <button type="submit">Se connecter</button>
        </form>
        {this.state.isAdmin && <p>Vous êtes authentifié en tant qu'administrateur.</p>}
      </div>
    );
  }
}

export default LoginPage;