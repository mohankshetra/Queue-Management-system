import { useState }
from "react";

import API
from "../services/api";

import {
  useNavigate
}
from "react-router-dom";

function Register() {

  const navigate =
    useNavigate();

  const [form,setForm] =
    useState({
      name:"",
      email:"",
      password:"",
      phone:""
    });

  const submitHandler =
    async (e) => {

      e.preventDefault();

      await API.post(
        "/auth/register",
        form
      );

      navigate("/");

    };

  return (

    <div>

      <h1>
        Register
      </h1>

      <form
        onSubmit={
          submitHandler
        }
      >

        <input
          placeholder="Name"
          onChange={(e)=>
            setForm({
              ...form,
              name:e.target.value
            })
          }
        />

        <br />

        <input
          placeholder="Email"
          onChange={(e)=>
            setForm({
              ...form,
              email:e.target.value
            })
          }
        />

        <br />

        <input
          placeholder="Password"
          type="password"
          onChange={(e)=>
            setForm({
              ...form,
              password:e.target.value
            })
          }
        />

        <br />

        <button>
          Register
        </button>

      </form>

    </div>

  );

}

export default Register;