import Modal from 'react-modal';
import React, {useContext} from 'react';
import { GlobalContext } from './GlobalStores';
import {useForm} from 'react-hook-form';
import './Register.css';
import { FaPaw } from 'react-icons/fa';
import { Keys } from './Key';
import axios from 'axios';
import { reactLocalStorage } from 'reactjs-localstorage';
const {WEB_BASE_URL, API_UPDATE_USER, API_DELETE_USER} = Keys;

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'teal'
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');


const Profile = () => {

  const {info, updateInfo} = useContext(GlobalContext);
  const {userid, name, email, memtype, createAt} = info;

  // Set up Modal:
  const [modalIsOpen, setIsOpen] = React.useState(false);

  // Our end-point API for update and delete:
  const UPDATE_API_END_POINT = `${WEB_BASE_URL}${API_UPDATE_USER}${userid}`;
  const DELETE_API_END_POINT = `${WEB_BASE_URL}${API_DELETE_USER}${userid}`;


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
      psjwt: psjwt // You can remove it

    }, config).then(response => {

      const {success} = response.data;
      if(success === false) {

        console.log("This email is already existed in our system");
        return null;

      }

      const {_id, name, email, memtype, createAt} = response.data.data;

      const newInfo = {

        userid: _id,
        name: name,
        email: email,
        memtype: memtype,
        createAt: createAt

      }

      updateInfo(newInfo);

      reactLocalStorage.setObject("newMemInfo", newInfo);

      reset();

      setTimeout(() => window.location.assign('/'), 2000);

    }).catch(err => {

      console.log("Wrong format", err.message);

    })

  }

  const onDelete = () => {

    const tokenCheck = reactLocalStorage.get("newMemToken");
    console.log("Check token: ", tokenCheck);

    const jspwt = tokenCheck;

    var config = {

      headers: {

        authorization: "Bearer " + jspwt

      }

    }

    axios.delete(DELETE_API_END_POINT, config).then(response => {

      const {success} = response.data;
      if (success === false) {

        console.log("Invalid id or token");
        return null;

      } else {

        console.log("Account is deleted successfully");

      }

      const newInfo = {

        userid: null,
        name: null,
        email: null,
        password: null,
        memtype: null,
        createAt: null

      } 

      updateInfo(newInfo);

      reactLocalStorage.remove("newMemInfo");
      reactLocalStorage.remove("newMemToken");

      reset();

      setTimeout(() => window.location.assign('/'), 2000);


    }).catch(err => {

      console.log("Deletion errors", err.message)

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

          <div className='btngroup'>
            <button type='submit' className='btn2'>Update Now &nbsp;<FaPaw/></button>
            <button type='button' className='btn2' onClick={() => setIsOpen(true)}>Delete Account &nbsp;<FaPaw/></button>
          </div>
        </form>

        <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={() => setIsOpen(false)}>

          <div>
            <h3>Member's Pet Store</h3><br/><hr/>
            <p>Hi, <span className='memname' >{name}</span>, </p>
            <p>Are you sure you want to delete your account?</p>
            <div className='btngroup'>

              <button className='btn2' onClick={() => {onDelete(); setIsOpen(false)} }>Yes</button>
              <button className='btn2' onClick={() => setIsOpen(false)}>No</button>

            </div>
          </div>

        </Modal>

      <h2>Current <span style={{color: "orange"}} >{name}</span>'s Profile</h2>

        <div className='profile-info'>
          <div className='profile-content'>
            <p><b>Your name:</b> {name}</p>
            
            <p><b>Your email:</b> {email}</p>
            
            <p><b>Your UserID:</b> {userid}</p>
            
            <p><b>Membership type:</b> {memtype}</p>

            <p><b>Registered date:</b> {createAt}</p>
          </div>
        </div>

    </div>
    

  )

}

export default Profile      
