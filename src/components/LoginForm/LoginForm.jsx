// import { useState } from "react";

// const LoginForm = ({signIn, setUser}) => {
//   const [error, setError] = useState('')


// const handleLogin = (e) => {
//   e.preventDefault();
//   const email = new FormData(e.target).get('email');
//   const password = new FormData(e.target).get('password');
//   console.log(email, password);

//   signIn(email, password)
//     .then((res) => {
//       setUser(res.user);
//       document.getElementById('close').click();
//     })
//     .catch((error) => {
//       setError(error.message);
      
//     });
// };



// return (


//   <form onSubmit={handleLogin} className="mb-4 text-sm w-3/4 mx-auto">
//     <h1 className="text-center text-4xl mb-4">Mukto Pathagar</h1>
//     <div className="mb-4">
      
//       <input
//         className=" appearance-none border border-[#383838] rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
//         id="email"
//         name="email"
//         type="email"
//         placeholder="Enter your Email"
//       />
//     </div>

//     <div className="mb-6">
      
//       <input
//         className=" appearance-none border border-[#383838] rounded w-full py-2 px-3 mb-1 leading-tight focus:outline-none focus:shadow-outline"
//         id="password"
//         name="password"
//         type="password"
//         placeholder="Enter your password"
//       />
//     </div>


//       <button
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
//         type="submit"
//       >
//         Log In
//       </button> 
//       <p className="text-sm text-red-500">{error}</p>     
//   </form>
// );
// };
// export default LoginForm;


import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Label from "./Label";
import { TbEyeBitcoin } from "react-icons/tb";
import { GoEyeClosed } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const LoginForm = () => {
   const {user, signIn, setUser} = useContext(AuthContext);
   const [showPassword, setShowPassword] = useState(false);
   const [error, setError] = useState('')
   
   if(user){
     return <Navigate to="/"/>
   }
const handleLogin = (e) => {
  e.preventDefault();
  const email = new FormData(e.target).get('email');
  const password = new FormData(e.target).get('password');
  console.log(email, password);

  signIn(email, password)
    .then((res) => {
      setUser(res.user);
  window.location.href = import.meta.env.VITE_ADMIN_PANEL;
     
    })
    .catch((error) => {
      setError(error.message);
      
    });
};
console.log(user);

  return (
    <div className="flex flex-col flex-1 w-full min-h-screen">
      
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-title-sm sm:text-title-md">
              Sign In
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Enter your email and password to sign in!
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center">
               {/* bordered google login button */}
            <button
                className="border rounded-md py-2 px-4 flex items-center gap-[10px] text-[1rem] hover:bg-gray-500 transition-all duration-200">
                <img src="https://i.ibb.co/dQMmB8h/download-4-removebg-preview-1.png" alt="google logo"
                     className="w-[23px]"/>
                Sign in with Google
            </button>
            </div>
                  <div className="divider">OR</div>
          
            <form onSubmit={handleLogin}> 
              <div className="space-y-6">
                <div>
                  <Label>
                    Email <span className="text-error-500">*</span>{" "}
                  </Label>
                   <div className="w-full">
            <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
                className="border-border dark:bg-transparent dark:border-slate-600 dark:placeholder:text-slate-600  border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-primary transition-colors duration-300"
            />
        </div>
                </div>
                <div>
                  <Label>
                    Password <span className="text-error-500">*</span>{" "}
                  </Label>
                  <div className="relative">
                <div className="w-full">
            <input
                type={showPassword ? "text" : 'password'}
                name="password"
                id="password"
                placeholder="Your password"
                className="border-border dark:bg-transparent dark:border-slate-600 dark:placeholder:text-slate-600  border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-primary transition-colors duration-300"
            />
        </div>
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                    >
                      {showPassword ? (
                        <TbEyeBitcoin className="fill-gray-500 dark:fill-gray-400 size-5" />
                      ) : (
                        <GoEyeClosed className="fill-gray-500 dark:fill-gray-400 size-5" />
                      )}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                 
                  <Link
                    to="/reset-password"
                    className="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400"
                  >
                    Forgot password?
                  </Link>
                   <p className="text-sm text-red-500">{error}</p>
                </div>
                <div>  
              
               <button className="cursor-pointer bg-[#3B9DF8] py-2 px-4 rounded-md flex ml-auto items-center gap-[12px] text-[1rem] text-white">
                Login
                <FaArrowRightLong className="text-[1.1rem]"/>
            </button>
                </div>
              </div>
            </form>

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;