import React, { useEffect } from "react";
import { useGetvaleinput } from "../../hook/useGetInputvalue";
import { useUserIsLoginMutation  } from "../../context/api/user";
import { useNavigate } from "react-router-dom";
import './Login.css'
import { toast } from "react-toastify";

const insatalstate = {
  UserName: "john32",
  password: "12345678",
};
const Login = () => {
  const { formdata, handleChange, setformdata } = useGetvaleinput(insatalstate);
  const [loginUser, { loading, isSuccess, error, data }] =
  useUserIsLoginMutation ();

  const navigate = useNavigate();
 const  handellogin = (e) => {
    e.preventDefault();
    loginUser(formdata);
    console.log(formdata);
  };

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("token", data.data.token);
      navigate("/careteProduct");
      toast.success("login success");
      setformdata(insatalstate);
    }
  }, [isSuccess]);
  return (
    <>
      <div className="container">
        <form onSubmit={handellogin} className="login_form">
          <h1>Login</h1>
          <label>userName</label>
          <input
            type="text"
            name="UserName"
            value={formdata.UserName}
            onChange={handleChange}
          />
          <label>password</label>
          <input
            type="password"
            name="password"
            value={formdata.password}
            onChange={handleChange}
          />
          <button>Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
