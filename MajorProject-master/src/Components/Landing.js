import React, { useEffect } from 'react'
import landing from "../Assets/landing3.jpg"
import about from "../Assets/about.jpg"
import "../styles/landing.css";
import Feature from './Feature.js';
import  toast ,{ Toaster } from 'react-hot-toast';
import { useContext } from 'react';
import UserContext from '../context/User/UserContext';
import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie';

function Landing() {

  const [cookies , setCookies] = useCookies();
  const {user , getuser} = useContext(UserContext);
  let loggeduser = JSON.parse(sessionStorage.getItem("user"));
  let role = loggeduser ? loggeduser.role : '';

  useEffect(()=>{
    if(cookies.token)
    {
      getuser();
    }
}, [cookies.token])

  return (

    <>
    <div className='landing-main'>
        <div className="landing-left">
            <h2>
               <span>Donate </span> And Earn
            </h2>

            <p>
                <q>Be The Reason Someone Smile</q>
            </p>

            <div className="landing-btn">
                <button className="donate-btn"> <a href={role !== 'organisation' ? '/Donate' : '/createDonation'}>
                   { role !== 'organisation' ? 'Donate' : 'Create Donation'} </a>
                   </button> 
                <button className='btn-more'>
                  Know More
                  </button>
            </div>
        </div>
        <div className="landing-right">
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/crowdfunding-for-business-project-4704189-3916153.png" 
            alt="" 
            loading='lazy'
            />
        </div>

    </div>

    <div className="landing-help">
        <Feature />

        <div className="landing-help-right">
            <div className="right-heading">
                <h2 className="help-heading">
                    Causes for donation
                </h2>
            </div>

            <div className="right-content">
            <p>
            Reward based blockchain system is a platform with an aim to provide
            to those in need and raising funds to accomplish the goal.
          </p>

          <p>
            This fundraising platform is a community where people/organisation
            can come together to show their support for a cause and make some
            donations for the same. Donators will also get a reward in the form
            of NFT based on the amount donated.
          </p>

          <p>
            This whole platform is secured and you can select and make decisions
            for the cause you want to show your support for. So let’s come
            together as our one contribution to the society would be a reason
            for many smiles around! Lets donate and make a move for a noble
            cause!
          </p>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Landing