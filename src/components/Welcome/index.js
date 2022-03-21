import React, { useState, useContext, useEffect } from 'react';
import { FirebaseContext } from 'components/Firebase';
import Logout from 'components/Logout';
import Quiz from 'components/Quiz';

const Welcome = (props) => {

  const firebase = useContext(FirebaseContext);

  useEffect(()=> {
    let listener = firebase.auth.onAuthStateChanged( user => {
      user ? setUserSession(user) : props.history.push('/');
      console.log(userSession);
    });

    return () => {
      listener()
    };
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