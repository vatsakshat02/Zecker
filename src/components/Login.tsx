import Header from "./Header";
import { useState, useRef } from "react";
import checkValidData from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import type { FirebaseError } from "firebase/app";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, SetErrorMessage] = useState<string | null>(null);

  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const name = useRef<HTMLInputElement>(null);

  const handleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleForm = () => {
    const message = checkValidData(
      email.current?.value || "",
      password.current?.value || "",
      name.current?.value || ""
    );
    SetErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current!.value,
        password.current!.value
      ).then(async (userCredential) => {
        const user = userCredential.user;

        try {
          await updateProfile(user, {
            displayName: name.current?.value,
          });

          await user.reload();

          console.log("Profile updated:", user.displayName);
        } catch (error) {
          const err = error as FirebaseError;
          SetErrorMessage(err.message);
        }
      });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current!.value,
        password.current!.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen">
      <Header />
      <div className="absolute w-105 h-105 bg-blue-500/20 blur-3xl rounded-full top-20 left-20"></div>
      <div className="flex flex-1 justify-center items-center">
        <form
          key={isSignInForm ? "signin" : "signup"}
          className="flex flex-col gap-6 justify-center bg-white/10 backdrop-blur-xl border border-white/10 rounded-lg w-[500px]  my-30 mx-auto text-white p-6 shadow-[0_8px_32px_rgba(0,0,0,0.6)] p-8 opacity-0 animate-[fadeIn_1.6s_ease-out_forwards]"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <h1 className="text-2xl font-bold">
              {isSignInForm ? "Welcome Back" : "Create Account"}
            </h1>
            <p
              className="text-gray-400 text-sm my-2 cursor-pointer"
              onClick={handleSignIn}
            >
              Login to continue or Click here to Sign Up
            </p>
          </div>

          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className="border border-white/20 bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 p-3 rounded-lg transition"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email"
            className="border border-white/20 bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 p-3 rounded-lg transition"
          />
          <input
            ref={password}
            type="password"
            placeholder="password"
            className="border border-white/20 bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 p-3 rounded-lg transition"
          />
          <p className="text-red-600 py-2">{errorMessage}</p>
          <button
            className="border border-white/20 p-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition font-semibold"
            onClick={handleForm}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
