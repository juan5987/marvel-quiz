import React, { useState, useContext, useEffect } from 'react';
import { FirebaseContext } from 'components/Firebase';
import Logout from 'components/Logout';
import Quiz from 'components/Quiz';

const Welcome = () => {

  const firebase = useContext(FirebaseContext);

  useEffect(()=> {
    firebase.auth.onAuthStateChanged( user => {
      user ? setUserSession(user) : setUserSession("")
      console.log(userSession);
    })
  })

  const [userSession, setUserSession] = useState("");

  return (
    <main className='quiz-bg'>
      {!userSession
        ?
        <>
          <div className='loader'>
          </div>
        </>
        :
        <div className='container'>
          <Logout />
          <Quiz />
        </div>
      }

    </main>
  )
}

export default Welcome