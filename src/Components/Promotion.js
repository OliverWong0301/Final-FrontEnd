import React, {useContext} from 'react';
import { GlobalContext } from './GlobalStores';
import { Link, Navigate } from 'react-router-dom';
import catAdoption from './CatAdoption';


const Promotion = () => {

  const {info} = useContext(GlobalContext);
  
  const {email} = info;

  return (
    <>
      <div>

        <h1>Promotion - Cats for Adoption</h1>

        {email === null ? <Navigate to='/login'/> : null} {/* From version 6 of react-router-dom, use Navigate instead of Redirect */}

      </div>

      <div className='productlist'>

        <ul>

          {

            Object.entries(catAdoption).map(([slug, {name, img}]) => (

              <li key={slug}>

                <Link to={`/promotion/${slug}`}>

                  <h3 className='pname' >{name}</h3>
                  <img src={img} alt={name} className='promo-img'/>

                </Link>

              </li>

            ))

          }

        </ul>

      </div>

    </>
  )

}

export default Promotion        
