import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from 'components/Firebase';

const ForgetPassword = (props) => {

    const firebase = useContext(FirebaseContext);

    const [email, setEmail] = useState("");
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleSubmitForm = (e) => {
        e.preventDefault();
        firebase.passwordReset(email)
        .then(() => {
            setErrorMessage(null);
            setSuccessMessage(`Un email a été envoyé à ${email}`);
            setEmail("");

            setTimeout(() => {
                props.history.push("/login");
            }, 5000);
        })
        .catch(error => {
            setErrorMessage(error);
            setEmail("");
        })
    }

    const isButtonDisabled = email === "";

  return (
    <main className='signUpLoginBox'>
      <div className='slContainer'>
        <div className="formBoxLeftForget">
        </div>
        <div className="formBoxRight">
          <div className="formContent">

            <h2>Mot de passe oublié</h2>

            <form onSubmit={handleSubmitForm}>
              <div className="inputBox">
                <input onChange={e => setEmail(e.target.value)} value={email} type="email" autoComplete='off' placeholder='Saisir votre adresse email' required />
                <label htmlFor="email">Email</label>
              </div>

            <button disabled={isButtonDisabled}>Récupérer</button>
            {
                successMessage &&
                <span className='successMessage'>
                    {successMessage}
                </span>
            }
            {
                errorMessage &&
                <span className='errorMessage'>
                    {errorMessage.message}
                </span>
            }

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

export default ForgetPassword;