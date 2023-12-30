import React, {useContext} from 'react';
import { GlobalContext } from './GlobalStores';
import {useForm} from 'react-hook-form';
import './Register.css';
import { FaPaw } from 'react-icons/fa';
import { Keys } from './Key';
import axios from 'axios';
import { reactLocalStorage } from 'reactjs-localstorage';

const Profile = () => {

  const {updateInfo} = useContext(GlobalContext);
  const {info} = useContext(GlobalContext);
  const {userid, name, email, memtype} = info;

  const {WEB_BASE_URL, API_UPDATE_USER} = Keys;

  const UPDATE_API_END_POINT = `${WEB_BASE_URL}${API_UPDATE_USER}${userid}`;

  const {register, handleSubmit, reset, formState: {errors}} = useForm();

  const onSubmit = (data) => {

      console.log("Updated data: ", data);

    const tokenCheck = reactLocalStorage.get("newMemToken");

      console.log("Check token: ", tokenCheck);

    const psjwt = tokenCheck;

    var config = {

      headers: {

        authorization: "Bearer " + tokenCheck

      }

    }

    axios.put(UPDATE_API_END_POINT, {

      name: data.Name,
      email: data.Email,
      memtype: data.Memtype,
      psjwt: psjwt

    }, config).then(response => {

      const {success} = response.data;
      if(success === false) {

        console.log("Response is failed");
        return null;

      }

      const {_id, name, email, memtype} = response.data.data;

      const newInfo = {

        userid: _id,
        name, email, memtype

      }

      updateInfo(newInfo);

      reactLocalStorage.setObject("newMemInfo", newInfo);

      reset();

      setTimeout(() => window.location.assign('/'), 4000);

    }).catch(err => {

      console.log("Wrong format", err);

    })

  }

  return (

    <div>

      <h1><FaPaw/>&nbsp;New <span style={{color: "orange"}} >{name}</span>'s Profile Update&nbsp;<FaPaw/></h1>

        <form className='form-control' onSubmit={handleSubmit(onSubmit)}>

          <label>Your new name: </label>
          <input type='text' {...register("Name", {required: true})}/>
          {errors.Name && <span className='err'>New name is required</span>}

          <label>Your new mail: </label>
          <input type='email' {...register("Email", {required: true})} />
          {errors.Email && <span className='err'>New email is required</span>}

          <label>Membership: </label>
            <select defaultValue="Basic" id='memtype' {...register("Memtype", {required: true})}>

                <option value="Free">Free</option>
                <option value="Basic">Basic</option>
                <option value="Premium">Premium</option>

            </select>

          <button type='submit' className='btn'>Sign In &nbsp;<FaPaw/></button>

        </form>

      <h2>Current <span style={{color: "orange"}} >{name}</span>'s Profile</h2>

        <div className='profile-info'>
          <div className='profile-content'>
            <p><b>Your name:</b> {name}</p>
            
            <p><b>Your email:</b> {email}</p>
            
            <p><b>Your UserID:</b> {userid}</p>
            
            <p><b>Membership type:</b> {memtype}</p>
          </div>
        </div>

    </div>
    

  )

}

export default Profile      
