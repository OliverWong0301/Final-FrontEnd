import React, {useContext} from 'react';
import { GlobalContext } from './GlobalStores';
import {FaPaw} from "react-icons/fa";
import { reactLocalStorage } from 'reactjs-localstorage';

const Logout = () => {

  const {updateInfo} = useContext(GlobalContext);

  const logoutNow = () => {

    const newInfo = {

      userid: null,
      name: null,
      email: null,
      password: null,
      memtype: null

    }

    updateInfo(newInfo);

    reactLocalStorage.remove("newMemInfo");
    reactLocalStorage.remove("newMemToken");

    setTimeout(() => window.location.assign('/'), 4000);

  }

  return (

    <div>

        <h1>Are you sure you want to log out now? &nbsp;<FaPaw/></h1>

        <button type='submit' className='btn2' onClick={() => logoutNow()} >Log Out &nbsp;<FaPaw/></button>

    </div>

  )

}

export default Logout       
