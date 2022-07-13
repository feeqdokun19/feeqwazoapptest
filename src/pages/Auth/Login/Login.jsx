import React from "react";
import backdrop from '../../../assets/images/wazosignupdis.JPG'
import wazologo from '../../../assets/images/wazobiatech.JPG'
import { Link } from 'react-router-dom'
import PrimaryFormField from '../../../components/Form/PrimaryFormField'




const Login = () => {

    return (

        <div className='grid md:grid-cols-2  grid-cols-1 gap-1 h-screen items-center '>
            <div className=" bg-slate-100 min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                <img src={wazologo} alt="Workflow" className='mx-auto h-12 w-auto' />
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login to your account</h2>
                
                </div>
 
                <form>
         

          <div
            class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
          >
            <p class="text-center font-semibold mx-4 mb-0">Or</p>
          </div>

           <div class="mb-6">
            <PrimaryFormField
              type="text"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput2"
              placeholder="Email address"
            />
          </div>

           <div class="mb-6">
            <PrimaryFormField
              type="password"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput2"
              placeholder="Password"
            />
          </div>

          <div class="flex justify-between items-center mb-6">
            <div class="form-group form-check">
              <input
                type="checkbox"
                class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                id="exampleCheck2"
              />
              <label class="form-check-label inline-block text-gray-800" for="exampleCheck2"
                >Remember me</label
              >
            </div>
            <a href="#!" class="text-gray-800">Forgot password?</a>
          </div>

          <div class="text-center lg:text-left">
            <button
              type="button"
              class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Login
            </button>
            <p className="text-center"> Dont have an account ?  <Link to="/Auth/Register">Register </Link> </p>

          </div>
        </form>
                
             
             </div>      
            </div>
            <div className='sm:hidden md:block '>
                <img src={backdrop} alt="Login" className='w-auto' />
            </div>
        
         </div>


    
)
}
export default Login