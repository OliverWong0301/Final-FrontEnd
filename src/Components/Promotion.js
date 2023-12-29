import React, {useContext} from 'react';
import { GlobalContext } from './GlobalStores';
import { Navigate } from 'react-router-dom';


const Promotion = () => {

  const {info} = useContext(GlobalContext);
  
  const {email} = info;

  return (
    <>
      <div>

        {email === null ? <Navigate to='/login'/> : null} {/* From version 6 of react-router-dom, use Navigate instead of Redirect */}

      </div>
    </>
  )

}

export default Promotion        
