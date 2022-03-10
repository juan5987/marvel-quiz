import React from 'react';
import Logout from 'components/Logout';
import Quiz from 'components/Quiz';

const Welcome = () => {
  return (
    <main className='quiz-bg'>
        <div className='container'>
            <Logout />
            <Quiz />
        </div>
    </main>
  )
}

export default Welcome