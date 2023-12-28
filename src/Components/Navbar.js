import React, {useContext} from 'react';
import logo from '../Images/catlogo3.png';
import { Link } from 'react-router-dom';
import { GlobalContext } from './GlobalStores';
import { TwitterShareButton, FacebookShareButton, TelegramShareButton, WhatsappShareButton } from 'react-share';
import { TwitterIcon, FacebookIcon, WhatsappIcon, TelegramIcon } from 'react-share';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

    const {info} = useContext(GlobalContext);
    const {email} = info;

  return (

    <div>
        <nav>
        <div className='extra'>
            <Link to='/'>
                <img className='logo' src={logo} alt='logo'/>&nbsp;
            </Link> 

            <TwitterShareButton url='https://twitter.com' title='Cat Lovers' hashtags={["#CatLovers"]}>
                <TwitterIcon round={true} size={32}/>
            </TwitterShareButton>&nbsp;
            <FacebookShareButton url='https://facebook.com' hashtag={["#CatLovers"]} >
                <FacebookIcon round={true} size={32}/>
            </FacebookShareButton>&nbsp;
            <WhatsappShareButton url='https://whatsapp.com' title='Cat Lovers' >
                <WhatsappIcon round={true} size={32}/>
            </WhatsappShareButton>&nbsp;
            <TelegramShareButton url='https://telegram.com' title='Cat Lovers'>
                <TelegramIcon round={true} size={32}/>
            </TelegramShareButton>
        </div>   
            {

                email   ? (<>   <div className='dropdown'>
                                    <button className='dropbtn'>Member &nbsp;<FontAwesomeIcon icon={faCaretSquareDown} /></button>
                                    <div className='dropdown-content'>
                                        <Link to='/profile'>Profile</Link>
                                    </div>
                                </div>  </>) 
                
                        : null

            } 
        
        </nav>    

        <nav>
            <div className='menuitem'>

                {

                    email   ? (<>   <Link to='/home'>Home</Link>
                                    <Link to='/funcat'>FunCat</Link>
                                    <Link to='/about'>About</Link>
                                    <Link to='/promotion'>Promotion</Link>
                                    <Link to='/logout'>Logout</Link>
                                    <Link to='#'>{email}</Link>         </>) 
                                
                            : (<>   <Link to='/home'>Home</Link>
                                    <Link to='/funcat'>FunCat</Link>
                                    <Link to='/about'>About</Link>
                                    <Link to='/promotion'>Promotion</Link>
                                    <Link to='/register'>Register</Link>
                                    <Link to='/login'>Login</Link>      </>)

                }
                
            </div>
        </nav>
    </div>

  )

}

export default Navbar           
