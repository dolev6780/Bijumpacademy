import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import SelectTime from "../components/SelectTime";
import GetDate from "../components/GetDate";
import GetAppointType from "../components/GetAppointType";
import { useNavigate } from "react-router-dom";
import {useZoomAppoint} from '../hooks/useZoomAppoint';
export default function ZoomPage() {


  const navigate = useNavigate();
 
  const { zoomAppoint, isLoading, error } = useZoomAppoint();
 
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [appointType, setAppointType] = useState("");
  const [isPay, setIspay] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");


  const makeZoomAppoint = () => {
    zoomAppoint( date,
      time,
      Fname,
      Lname,
      email,
      appointType,)
  }
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
      <h1 className="text-4xl text-white font-bold">קביעת מפגש זום</h1>
      <GetDate setInput={setDate} />
      <SelectTime setSelect={setTime} />
      <Input setInput={setFname} type="text" placeholder="First Name" />
      <Input setInput={setLname} type="text" placeholder="Last Name" />
      <Input setInput={setEmail} type="email" placeholder="Email" />
      <GetAppointType setInput={setAppointType} />
      <Button trigger={makeZoomAppoint} BtnName="מעבר לתשלום" />
    </div>
  );
}
