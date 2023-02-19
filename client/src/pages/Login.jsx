import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login, error, isLoading} = useLogin();
    const checkDetails = () => {
     login(email, password);
    }
    
  return (
    <div className=" p-4 pr-8 pl-8
    sm:p-8
    md:p-14
    lg:p-20
    absolute top-2/4 left-2/4
    -translate-x-2/4 -translate-y-2/4
    border">
      <h1>התחברות</h1>
      <Input setInput={setEmail} type="email" placeholder="Email" />
      <Input setInput={setPassword} type="password" placeholder="Password" />
      <Button trigger={checkDetails} BtnName="Sign In" />
      <p className="text-white mt-10">
       Not signed yet? 
        <span onClick={()=>{navigate('/register')}} className="ml-2 font-bold text-blue-500
        hover:underline hover:cursor-pointer hover:text-blue-400">Sign up</span>
      </p>
    </div>
  );
}
