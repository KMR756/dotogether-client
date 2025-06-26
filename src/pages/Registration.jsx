import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import toast, { ToastBar, Toaster } from "react-hot-toast";
import Swal from "sweetalert2";

const Registration = () => {
  const { createUser, updateUser, setUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log({ name, email, photo, password });
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isLongEnough = password.length >= 6;

    if (!hasUppercase || !hasLowercase || !isLongEnough) {
      // console.log("worng pass");

      toast.error(
        <>
          Password must have at least:
          <br />• One uppercase letter
          <br />• One lowercase letter
          <br />• Minimum 6 characters
        </>,
        {
          duration: 4000,
          position: "top-center",
        }
      );
      return;
    }
    createUser(email, password)
      .then((result) => {
        // Signed up
        const user = result.user;
        navigate(`${location.state ? location.state : "/"}`);
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            Swal.fire({
              position: "top-middle",
              icon: "success",
              title: "Registration successfully!!",
              showConfirmButton: false,
              timer: 2000,
            });
          })
          .catch((error) => {
            toast.error(error, { duration: 3000, position: "top-right" });
            setUser(user);
          });
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage, {
          duration: 3000,
          position: "top-right",
        });
        // ..
      });
    e.target.reset();
  };
  return (
    <div>
      <section className=" dark:bg-[#393E46]">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto my-20 lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
              </h1>
              <form
                onSubmit={handleRegister}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Your Name"
                    required
                  ></input>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="example@gmail.com"
                    required
                  ></input>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your Photo URL
                  </label>
                  <input
                    type="url"
                    name="photo"
                    id="photo"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Your Photo URL"
                    required
                  ></input>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  ></input>
                </div>

                <button
                  type="submit"
                  className="w-full inter text-[#FF6363] font-bold bg-indigo-300 hover:bg-indigo-500 transition-all duration-200 dark:text-white dark:bg-gray-500 dark:hover:bg-gray-700   rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to={"/login"}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    LogIn here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;
