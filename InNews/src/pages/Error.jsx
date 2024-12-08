import Lottie from "lottie-react";
import error from "../assets/error.json";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Animation Section */}
        <div className="flex-shrink-0">
          <Lottie animationData={error} loop={true} className="h-80 w-80" />
        </div>

        {/* Error Content Section */}
        <div id="error-page" className="text-center md:text-left">
          <div className="content max-w-lg">
            <h2 className="text-[10rem] leading-none bg-gradient-to-r from-blue-400 via-purple-500 to-red-400 bg-clip-text text-transparent font-extrabold tracking-tight animate-gradient">
              404
            </h2>
            <h4 className="text-2xl font-semibold text-gray-800 mt-4">
              Sorry! Page not found
            </h4>
            <p className="text-gray-600 mt-2">
              Oops! It seems like the page you're trying to access doesn't
              exist. If you believe there's an issue, feel free to report it,
              and we'll look into it.
            </p>
            <div className="btns flex gap-4 mt-6 justify-center md:justify-start">
              <NavLink
                to="/"
                className="px-6 py-2 text-sm font-medium text-white bg-indigo-500 rounded-full shadow-md hover:bg-indigo-600 transition duration-300"
              >
                Return Home
              </NavLink>
              <NavLink
                to="/contact"
                className="px-6 py-2 text-sm font-medium text-indigo-500 border border-indigo-500 rounded-full shadow-md hover:bg-indigo-500 hover:text-white transition duration-300"
              >
                Report Problem
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
