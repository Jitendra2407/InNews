import { useState } from "react";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import register from "../assets/register.json";
import { useAuth } from "../store/auth";
import "../App.css";
import { toast } from "react-toastify";

const URL = "http://localhost:5000/api/auth/register";

const Register = () => {
  // State to store form inputs
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();

  const { storetokenInLS } = useAuth();

  // Handle input changes
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", user);
    // Perform registration logic here (e.g., send data to the server);
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();
      console.log("res from server", res_data.extraDetails);

      if (response.ok) {
        // store the token in local storage
        storetokenInLS(res_data.token);
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        toast.success(
          "Registration Successful"
        );
        navigate("/");
      } else {
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      }
    } catch (error) {
      console.log("register ", error);
    }
  };

  return (
    <>
      <section>
        <main className="flex justify-around items-center ">
          <div className="h-auto">
            <Lottie
              animationData={register}
              loop={true}
              className="h-[600px]"
            />
          </div>
          {/* Registration form */}
          <div>
            <h1>Registration Form</h1>
            <br />
            <form onSubmit={handleSubmit} className={`flex flex-col gap-3`}>
              <div className={`flex flex-col items-start`}>
                <label htmlFor="username">Username</label>
                <input
                  className="rounded-md"
                  type="text"
                  name="username"
                  placeholder="Username"
                  id="username"
                  required
                  autoComplete="off"
                  value={user.username}
                  onChange={handleInput}
                />
              </div>
              <div className={`flex flex-col items-start`}>
                <label htmlFor="email">Email</label>
                <input
                  className="rounded-md"
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
                <label htmlFor="phone">Phone</label>
                <input
                  className="rounded-md"
                  type="number"
                  name="phone"
                  placeholder="Phone"
                  id="phone"
                  required
                  autoComplete="off"
                  value={user.phone}
                  onChange={handleInput}
                />
              </div>
              <div className={`flex flex-col items-start`}>
                <label htmlFor="password">Password</label>
                <input
                  className="rounded-md"
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
              <br />
              <button
                type="submit"
                className="self-start bg-black text-white rounded-lg"
              >
                Register Now
              </button>
            </form>
          </div>
        </main>
      </section>
    </>
  );
};

export default Register;
