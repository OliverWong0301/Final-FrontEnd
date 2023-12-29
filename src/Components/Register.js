import React, {useContext} from 'react';
import {useForm} from 'react-hook-form';
import './Register.css';
import axios from 'axios';
import { Keys } from './Key';
import { GlobalContext } from './GlobalStores';
import { FaPaw } from "react-icons/fa";
import { reactLocalStorage } from 'reactjs-localstorage';

const Register = () => {

    const {register, handleSubmit, reset, formState: {errors}} = useForm();

    const {updateInfo} = useContext(GlobalContext)

    const {WEB_BASE_URL, API_ADD_USER} = Keys;

    const ADD_USER_END_POINT_API = WEB_BASE_URL + API_ADD_USER;

    const onSubmit = (data) => {

        console.log("Data of onSubmit: ", data);

        // We need to send these info as the form requires:

        axios.post(ADD_USER_END_POINT_API, {

            name: data.Name,
            email: data.Email,
            password: data.Password,
            memtype: data.Memtype

        }).then(response => {

            const {success, token} = response.data;

            // This line of code helps us to see everything included token were responsed from server
            console.log("Response data from server: ", response.data);

            if (success === false) {

                console.log("Response is failed");
                return null;

            }

            const {_id, name, email, password, memtype} = response.data.data;

            const newInfo = {

                userid: _id,
                name, email, password, memtype

            }

            updateInfo(newInfo);

            reactLocalStorage.setObject("newMemInfo", newInfo);
            reactLocalStorage.set("newMemToken", token);

            reset();

            setTimeout(() => window.location.assign('/'), 4000);

        }).catch(err => {

            console.log("Adding user errors: ", err);

        })

    }

  return (

    <div>

        <h1>Sign up with us today &nbsp;<FaPaw/></h1>

        <form onSubmit={handleSubmit(onSubmit)} className='form-control'>

            <label>Name: </label>
            <input type='text' {...register("Name", {required: true})} />
            {errors.Name && <span className='err' >Name is required</span>}

            <label>Email: </label>
            <input type='email' {...register("Email", {required: true})} />
            {errors.Email && <span className='err'>Email is required</span>}

            <label>Password: </label>
            <input type='password' {...register("Password", {required: true})} />
            {errors.Password && <span className='err'>Password is required</span>}

            <label>Membership: </label>
            <select defaultValue="Basic" id='memtype' {...register("Memtype", {required: true})}>

                <option value="Free">Free</option>
                <option value="Basic">Basic</option>
                <option value="Premium">Premium</option>

            </select>

            <div className='extra'>
                <button type='submit' className='btn'>Sign Up &nbsp;<FaPaw/></button>
            </div>
        </form>

    </div>

  )

}

export default Register 
