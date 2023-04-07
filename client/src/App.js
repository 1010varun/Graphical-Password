import React, { useState } from "react";
import axios from "axios";

// COMPONENTS
import Navbar from "./components/Navbar";


const App = () => {

  const [email, setEmail] = useState("");
  const [theme, setTheme] = useState("");

  const handelSubmit = async () => {
    const url = "http://localhost:5000/signup";
    const data = { email, theme };
    axios.post(url, data);
    setTheme("");
    setEmail("");
  }

  return (
    <>
      <Navbar />

      <div className="mt-48 flex flex-row justify-center">
        <div class="mr-5 relative z-0 w-3/12 mb-6 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div class="ml-5 relative z-0 w-3/12 mb-6 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Theme
          </label>
        </div>
      </div>

      <div className="text-center">
        <button
          type="button"
          onClick={handelSubmit}
          class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 mt-10"
        >
          Select Image
        </button>
      </div>
    </>
  );
}

export default App;