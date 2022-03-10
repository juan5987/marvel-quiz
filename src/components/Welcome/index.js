import React, { useState } from 'react';
import Logout from 'components/Logout';
import Quiz from 'components/Quiz';

const Welcome = () => {

  const [userSession, setUserSession] = useState(null);

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