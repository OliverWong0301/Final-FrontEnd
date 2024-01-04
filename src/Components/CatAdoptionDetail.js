import React from 'react';
import catAdoption from './CatAdoption';
import { useParams } from 'react-router-dom';

const CatAdoptionDetail = () => {

    const {slug} = useParams();
    const cat = catAdoption[slug];

    if(!cat) {

        return <h2>No cat found</h2>

    }

    const {name, img} = cat;

  return (

    <div>

        <div className='productdetail' >

            <h2>{name}</h2>
            <img src={img} alt={name}/>

        </div>

    </div>
  
  )

}

export default CatAdoptionDetail        