import React, {useContext} from 'react';
import { GlobalContext } from './GlobalStores';
import {FaPaw} from "react-icons/fa";

const Login = () => {

  const {updateInfo} = useContext(GlobalContext);

  const loginNow = () => {

    const newInfo = {

      userid: "ABC",
      name: "Chang Dien",
      email: "changdien@yahoo.com",
      password: "123456789",
      memtype: "Free"

    }

    updateInfo(newInfo);

  }

  return (

    <div>

        <h1>Are you a member? Log in now &nbsp;<FaPaw/></h1>

        <button type='submit' className='btn2' onClick={() => loginNow()} >Log In &nbsp;<FaPaw/></button>

    </div>

  )

}

export default Login        
