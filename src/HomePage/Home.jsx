import React from "react";
import backdrop from '../assets/images/landingpagebg.jpg'
import { Link } from 'react-router-dom'
 

const Home = () => {
    return (
                   
              
            <div className="flex">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <img src={backdrop} alt="Wazobiatech test" className='max-h-screen blur(4px) max-w-6xl' />
                        </div>
                    </div>
                </div>
                
                
                <div>
                    <p className=''>
                    <Link to='/Auth/Login'> 
                        <button className='btn bg-purple-800 p-3 rounded text-white justify-center items-center'> Get Started </button>
                    </Link>
                    </p>
                </div>
            </div>
            
    )
    
}

export default Home