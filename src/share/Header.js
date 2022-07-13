import react from "react"

import headerLogo from "../assets/images/header-logo.jpeg"

const Header = ({children}) => {
    return(
        <div> 
             <nav className="fixed w-full z-30  top-0 bg-blue-300 text-white">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                   
                <img src={headerLogo} alt="Header-Logo" style={{ maxWidth: "5%" }} /> &nbsp; &nbsp;
                    <span className="font-semibold text-xl tracking-tight">GVEST Coop & I.T Group </span>

                    <div className="pl-4 flex items-center">
                        <h1>Sample list page</h1>
                    </div>
                    <div className="pl-4 flex items-center">
                        <h1>Sample detail page</h1>
                    </div>
        <div className="block lg:hidden pr-4">
          <button id="nav-toggle" className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
              
            <li className="mr-3">
               About Us
            </li>
            <li className="mr-3">
               What we do
            </li>
            <li className="mr-3">
                Contact Us 
            </li>
          </ul>
          <button className="mx-auto lg:mx-0 bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Action
          </button>
        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
            </nav>
            {children}
            
            <footer>
                 <div className="h-6  mb-auto px-20 py-10 bg-blue-200 text-center text-gray-500">
                    &copy; Feeq interview Task @Gvest2022
                </div>
            </footer>

        </div>
            


    )
}
export default Header;