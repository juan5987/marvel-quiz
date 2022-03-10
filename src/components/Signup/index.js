import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from 'components/Firebase';

const Signup = (props) => {

  const firebase = useContext(FirebaseContext);

  const data = {
    pseudo: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [loginData, setLoginData] = useState(data);
  const [error, setError] = useState('');

  const handleInputChange = e => {
    setLoginData({
      ...loginData,
      [e.target.id]: e.target.value},
      )
  }
  
  const handleSubmitForm = e => {
    e.preventDefault();
    const { email, password } = loginData;
    firebase.signupUser(email, password)
    .then(user => {
      // Je vide le formulaire
      setLoginData({...data});
      // Je vide le message d'erreur
      setError('');
      props.history.push('/welcome');
    })
    .catch(error => {
      setError(error);
    })
  }

  const { pseudo, email, password, confirmPassword } = loginData;

  const signupBtn = pseudo === "" ||email === "" || password === "" || password !== confirmPassword 
  ? <button disabled>Inscription</button>
  : <button>Inscription</button>

  // Gestion de l'erreur
  const errorMessage = error !== '' && <span>{error.message}</span>

  return (
    <main className="signUpLoginBox">
      <div className="slContainer">
        <div className="formBoxLeftSignup">
        </div>
        <div className="formBoxRight">
          <div className="formContent">
          <h2>Inscription</h2>
            <form onSubmit={handleSubmitForm}>
              <div className="inputBox">
                <input onChange={handleInputChange} value={pseudo} type="text" id="pseudo" autoComplete='off' placeholder='Saisir votre pseudo' required/>
                <label htmlFor="pseudo">Pseudo</label>
              </div>
              <div className="inputBox">
                <input onChange={handleInputChange} value={email} type="email" id="email" autoComplete='off' placeholder='Saisir votre adresse email' required/>
                <label htmlFor="email">Email</label>
              </div>
              <div className="inputBox">
                <input onChange={handleInputChange} value={password} type="password" id="password" autoComplete='off' placeholder='Saisir votre mot de passe' required/>
                <label htmlFor="password">Mot de passe</label>
              </div>
              <div className="inputBox">
                <input onChange={handleInputChange} value={confirmPassword} type="password" id="confirmPassword" autoComplete='off' placeholder='Saisir votre mot de passe à nouveau' required/>
                <label htmlFor="confirmPassword">Confirmation du mot de passe</label>
              </div>
              {signupBtn}
              {errorMessage}
            </form>
            <div className="linkContainer">
              <Link className="simpleLink" to="/login">Déja inscrit ? Connectez-vous</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Signup;