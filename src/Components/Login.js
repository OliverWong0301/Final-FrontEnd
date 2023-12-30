import React, {useContext} from 'react';
import { GlobalContext } from './GlobalStores';
import {FaPaw} from "react-icons/fa";
import { useForm } from 'react-hook-form';
import './Register.css';
import axios from 'axios';
import { Keys } from './Key';
import { reactLocalStorage } from 'reactjs-localstorage';

const Login = () => {

  const {updateInfo} = useContext(GlobalContext);

  const {register, handleSubmit, reset, formState: {errors}} = useForm();

  const {WEB_BASE_URL, API_LOGIN} = Keys;

  const LOGIN_API_END_POINT = WEB_BASE_URL + API_LOGIN;

  const onSubmit = (data) => {

    console.log("Login data: ", data);

    axios.post(LOGIN_API_END_POINT, {

      email: data.Email,
      password: data.Password

    }).then(response => {

      const {success, token} = response.data;

      if(success === false) {

        console.log("Resonse is failed");
        return null;

      }

      const {_id, name, email, password, memtype, createAt} = response.data.data;

      const newInfo = {

        userid: _id,
        name: name,
        email: email,
        password: password,
        memtype: memtype,
        createAt: createAt

      }

      updateInfo(newInfo);

      reactLocalStorage.setObject("newMemInfo", newInfo);
      reactLocalStorage.set("newMemToken", token);

      reset();

      setTimeout(() => window.location.assign('/'), 4000);

    }).catch(err => {

      console.log("Login errors: Wrong email or password", err);

    })

  }

  return (

    <div>

        <h1>Please Login &nbsp;<FaPaw/> to the Member's Page &nbsp;<FaPaw/></h1>

        <form className='form-control' onSubmit={handleSubmit(onSubmit)}>

          <label>Email: </label>
          <input type='email' {...register("Email", {required: true})} />
          {errors.Email && <span className='err'>Email is required</span>}

          <label>Password: </label>
          <input type='password' {...register("Password", {required: true})}/>
          {errors.Password && <span className='err'>Password is required</span>}

          <button type='submit' className='btn'>Sign In &nbsp;<FaPaw/></button>

        </form>

        <h2>Not yet a member? <a href='/register'>Register</a> with us today!</h2>

    </div>

  )

}

export default Login        
