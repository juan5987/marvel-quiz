import React, {useState} from 'react';

const Signup = () => {

  const data = {
    pseudo: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [loginData, setLoginData] = useState(data);

  const { pseudo, email, password, confirmPassword } = loginData;

  const handleInputChange = e => {
    setLoginData({
      ...loginData,
      [e.target.id]: e.target.value},
      )
  }

  const signupBtn = pseudo === "" ||email === "" || password === "" || password !== confirmPassword 
  ? <button disabled>Inscription</button>
  : <button>Inscription</button>

  return (
    <div className="signUpLoginBox">
      <div className="slContainer">
        <div className="formBoxLeftSignup">
        </div>
        <div className="formBoxRight">
          <div className="formContent">
          <h2>Inscription</h2>
            <form action="">
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
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup