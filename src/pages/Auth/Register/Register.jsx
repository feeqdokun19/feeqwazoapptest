import { useEffect } from 'react'
import { Link } from 'react-router-dom'
 import SignUpImg from '../../../assets/images/wazosignupdis.JPG'
import PrimaryFormField from '../../../components/Form/PrimaryFormField'
import PrimarySolidButton from '../../../components/Button/PrimarySolidButton'

   

const Register = () => {



    useEffect(() => {
        document.title = "feeqwazoapp - Register";
     }, []);

    

     

     return (
        <>
            
            <div className='grid sm:grid-rows-1 md:grid-cols-2  h-screen items-center '>
             
                <div className="min-h-full sm:hidden md:block sm:px-6 flex items-center justify-center py-12 px-12 lg:px-8 ">
                <br /> 
                <p className='text-3xl text-center '>Wazobiatech made life easy</p>
                    <br /><br /><div><img src={SignUpImg} alt="Signup today" className='w-full sm:hidden md:block' /> </div>
                
                </div>
                
                <div className=" bg-slate-100 min-h-full flex items-center justify-center py-12 px-12 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8">
                        <div>
                          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up with Wazobiatech</h2> <br />
                            <p className="text-center" > Already registered ?  Login<Link to="/Auth/Login" className='text-blue underline'> here</Link> </p>
                        
                        </div>
                        <form>
                            
                                <div >
                                    <label htmlFor="firstname" className="sr-only">Firstname</label>
                                    <PrimaryFormField type="text" placeholder="Enter firstname" />
                                </div><br />
                                <div>
                                <label htmlFor="othernames" className="sr-only">Othername</label>
                                <PrimaryFormField type="text" placeholder="Enter lastname" />
                                </div><br />
                                <div>
                                <label htmlFor="email-address" className="sr-only">Phone</label>
                                    <PrimaryFormField type="text" placeholder="Enter Phone"  />
                                </div><br />
                                <div>
                                    <label htmlFor="email-address" className="sr-only">Email address</label>
                                    <PrimaryFormField type="email" placeholder="Email address" />
                                </div><br />
                                <div>
                                    <label htmlFor="password" className="sr-only">Password</label>
                                    <PrimaryFormField type="password" placeholder="Password"  />
                                </div><br />
                                <div>
                                    <label htmlFor="confirm-password" className="sr-only">Confirm Password </label>
                                    <PrimaryFormField type="password" placeholder="Confirm Password" />
                                </div><br />
                                
                    
                        
                                <div> <PrimarySolidButton type="submit" /></div>
                        </form>
                    </div>      
                </div>
                
            </div>
        </>

        
    )
}

export default Register