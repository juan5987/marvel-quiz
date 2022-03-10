import React, { useRef, useEffect, useState } from 'react'

const Landing = () => {

  const [button, setButton] = useState(false);

  const refWolverine = useRef(null);

  useEffect(() => {
    refWolverine.current.classList.add("startingImg");
    setTimeout(() => {
      refWolverine.current.classList.remove("startingImg");
      setButton(true);
    }, 1000)
  }, [])

  const displayButtons = button && 
  <>
    <div className='leftBox'>
      <button className='btn-welcome'>Inscription</button>
    </div>
    <div className='rightBox'>
      <button className='btn-welcome'>Connexion</button>
    </div>
  </>

  return (
    <main ref={refWolverine} className='welcomePage'>
      {displayButtons}
    </main>
  )
}

export default Landing