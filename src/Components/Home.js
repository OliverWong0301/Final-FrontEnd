import React, {useContext} from 'react';
import bgcat from '../Images/mainkitten.jpg';
import logincat from '../Images/showcat.jpg';
import { GlobalContext } from './GlobalStores';

const Home = () => {

    const {info} = useContext(GlobalContext);
    const {name, email} = info;

  return (

    <div>

        {

            email   ? (<>   
                            <h1>Welcome back, {name}</h1>
                            <img className='showcat' src={logincat} alt='logincat'/>    </>) 
            
                    : (<>   
                            <h1>Welcome to Cat Lover page!</h1>
                            <img className='showcat' src={bgcat} alt='bgcat'/>          </>)

        }

    </div>

  )

}

export default Home         
