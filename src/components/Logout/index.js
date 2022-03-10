import React, { useState, useEffect, usecontext } from 'react';
import {FirebaseContext} from 'components/Firebase';
import { useContext } from 'react';

const Logout = () => {

    const firebase = useContext(FirebaseContext);

    const [checked, setChecked] = useState(false);
    

    useEffect(() => {
        if(checked){
            firebase.signoutUser();
        }
    }, [checked, firebase])
    
    const handleChange = e => {
        setChecked(e.target.checked);
    }

    return (
        <div className='logoutContainer'>
            <label className="switch">
                <input onChange={handleChange} type="checkbox" checked={checked} />
                <span className='slider round'></span>
            </label>
        </div>
    )
}

export default Logout;