import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import { FirebaseContext } from 'components/Firebase';

const Login = (props) => {


  const firebase = useContext(FirebaseContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayLoginBtn, setDisplayLoginBtn] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (password.length >= 6 && email !== ''){
      setDisplayLoginBtn(true);
    } else {
      setDisplayLoginBtn(false);
    }
  }, [password, email, displayLoginBtn])

  const handleSubmitForm = e => {
    e.preventDefault();
    firebase.loginUser(email, password)
    .then(user => {
      setEmail('');
      setPassword('');
      props.history.push('/welcome');
    })
    .catch(error => {
      setError(error);
      setEmail('');
      setPassword('');
    })
  }

  const loginBtn = displayLoginBtn
  ? <button>Connexion</button>
  : <button disabled>Connexion</button>

  const errorMessage = error !== '' && <span>{error.message}</span>

  return (
    <main className='signUpLoginBox'>
      <div className='slContainer'>
        <div className="formBoxLeftLogin">
        </div>
        <div className="formBoxRight">
          <div className="formContent">
            <h2>Connexion</h2>
            <form onSubmit={handleSubmitForm}>
              <div className="inputBox">
                <input onChange={e => setEmail(e.target.value)} value={email} type="email" autoComplete='off' placeholder='Saisir votre adresse email' required />
                <label htmlFor="email">Email</label>
              </div>
              <div className="inputBox">
                <input onChange={e => setPassword(e.target.value)} value={password} type="password" autoComplete='off' placeholder='Saisir votre mot de passe' required />
                <label htmlFor="password">Mot de passe</label>
              </div>
              {loginBtn}
              {errorMessage}
            </form>
            <div className="linkContainer">
              <Link className="simpleLink" to="/signup">Pas encore inscrit ? Inscrivez-vous</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Login