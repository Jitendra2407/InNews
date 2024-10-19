import Lottie from "lottie-react";
import login from "../assets/login.json";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const URL = "http://localhost:5000/api/auth/login";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

    const { storetokenInLS } = useAuth();


  // tackle handleInput
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  // tackle handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", user);
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",

        },
        body: JSON.stringify(user),
      })

      console.log("login form", response);

      const res_data = await response.json();

      
      if(response.ok){
        storetokenInLS(res_data.token);
        toast.success("Login Successfull");
        setUser({
          email: "",
          password: "",
        });
        navigate("/");
      }
      else{
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
        console.log("invalid credentials")
      }
    } catch (error) {
      console.log("login", error);
    }
  };

  return (
    <>
      <section>
        <main className="flex justify-around items-center m-10">
          <div>
            <Lottie animationData={login} loop={true} className="h-80 w-80" />
          </div>
          {/* login form */}
          <div className="flex flex-col items-start">
            <h1 className="">Login Form</h1>
            <br />
            <form onSubmit={handleSubmit} className={`flex flex-col gap-3`}>
              <div className={`flex flex-col items-start`}>
                <label htmlFor="email">Email</label>
                <input
                  className="rounded-md w-[350px]"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  id="email"
                  required
                  autoComplete="off"
                  value={user.email}
                  onChange={handleInput}
                />
              </div>
              <div className={`flex flex-col items-start`}>
                <label htmlFor="password">Password</label>
                <input
                  className="rounded-md w-[350px]"
                  type="password"
                  name="password"
                  placeholder="Password"
                  id="password"
                  required
                  autoComplete="off"
                  value={user.password}
                  onChange={handleInput}
                />
              </div>
              <button
                type="submit"
                className="self-start bg-black text-white rounded-lg mt-4"
              >
                Login Now
              </button>
            </form>
          </div>
        </main>
      </section>
    </>
  );
};

export default Login;
