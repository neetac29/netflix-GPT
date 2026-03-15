import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { AVATAR_IMAGE, BG_URL } from "../utils/constants";


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();


  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);

  const handleButtonClick = () => {
    // Validate the form data
    let message;
    if(!isSignInForm){
        message = checkValidData(email.current.value, password.current.value, fullname.current.value);
      }else{
        message = checkValidData(email.current.value, password.current.value);
      }
    setErrorMessage(message);

    if(message) return ;

    //Sign In /Sign Up
    if(!isSignInForm){
        //Sign Up Logic
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
            
            const user = userCredential.user;
            //update user profile
            updateProfile(user, {
              displayName: fullname.current.value,
             photoURL: AVATAR_IMAGE
                
            })
              .then(() => {
                const { uid, email, displayName, photoURL } = auth.currentUser;
            
                dispatch(
                  addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                  })
                );
            
              })
              .catch((error) => {
                setErrorMessage(error.message);
              });
           
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
        });
    }else{
        // Sign In Logic
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential)=> {
            const user = userCredential.user
        })
        .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
        })
    }
    

  }

  const toggleSingInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG_URL}
          alt="background_img"
        />
      </div>
      <form onSubmit={(e)=> e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white bg-opacity-70">
        
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={fullname}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}

        <input
        ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />

        <input
        ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />

        <p className="text-red-500 font-bold text-lg py-2 ">{errorMessage}</p>
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 cursor-pointer" onClick={toggleSingInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>

      </form>
    </div>
  );
};

export default Login;
