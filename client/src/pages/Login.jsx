import { useState }
from "react";

import API
from "../services/api";

import { useNavigate }
from "react-router-dom";
import {
    useDispatch
} from "react-redux";

import {
    loginSuccess
} from "../redux/authSlice";
function Login() {
  const dispatch =
    useDispatch();

  const navigate =
    useNavigate();

  const [email,setEmail] =
    useState("");

  const [password,setPassword] =
    useState("");

  const loginHandler =
    async (e) => {

      e.preventDefault();

      try {

        const res =
          await API.post(
            "/auth/login",
            {
              email,
              password
            }
          );
        dispatch(

            loginSuccess({

                token:
                    res.data.token,

                user:
                    res.data.user

            })

        );


        localStorage.setItem(
          "token",
          res.data.token
        );

        if (
          res.data.user.role
          === "ADMIN"
        ) {

        navigate("/admin");

        }
        else if (
          res.data.user.role
          === "STAFF"
        ) {

        navigate("/staff");

        }
        else {

        navigate(
        "/dashboard"
        );

        }

      } catch (err) {
        console.error(err);

        alert(
          "Invalid Credentials"
        );

      }

    };

  return (

    <div>

      <h1>Login</h1>

      <form
        onSubmit={
          loginHandler
        }
      >

        <input
          type="email"
          placeholder="Email"
          onChange={(e)=>
            setEmail(
              e.target.value
            )
          }
        />

        <br />

        <input
          type="password"
          placeholder="Password"
          onChange={(e)=>
            setPassword(
              e.target.value
            )
          }
        />

        <br />

        <button>
          Login
        </button>

      </form>

    </div>

  );

}

export default Login;