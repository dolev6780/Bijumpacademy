import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../hooks/useRegister";
export default function Login() {
  const navigate = useNavigate();
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPay, setIspay] = useState(false) 
  const {register, error, isLoading} = useRegister();

  const sendDetails = async () => {
     register(Fname, Lname, email, password, isPay);
  };
  return (
    <div
      className="
    p-4 pr-8 pl-8
    sm:p-8
    md:p-14
    lg:p-20
    absolute top-2/4 left-2/4
    -translate-x-2/4 -translate-y-2/4
    border
    "
    >
      <span className="borderTail "></span>
      <span className="borderTail2 "></span>
      <h1>להרשמה</h1>
      <Input setInput={setFname} type="text" placeholder="First Name" />
      <Input setInput={setLname} type="text" placeholder="Last Name" />
      <Input setInput={setEmail} type="email" placeholder="Email" />
      <Input setInput={setPassword} type="password" placeholder="Password" />
      <Button trigger={sendDetails} BtnName="Sign Up" />
      {error && <div>{error}</div>}
      <p className="text-white mt-10">
        Already Signed Up?
        <span
          onClick={() => {
            navigate("/login");
          }}
          className="ml-2 font-bold text-blue-500
        hover:underline hover:cursor-pointer hover:text-blue-400"
        >
          Sign In
        </span>
      </p>
    </div>
  );
}
