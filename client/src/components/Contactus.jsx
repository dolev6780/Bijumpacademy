import React, {useState} from 'react'
import Button from './Button'
import Input from './Input'
import {useContactus} from '../hooks/useContactus'
export default function Contactus() {
  const {contactus, error, isLoading} = useContactus();
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState("");
  const [textArea, setTextArea] = useState("");

  const sendDetails = async () => {
    contactus(fullname, phone, email, textArea);
 };
  return (
    <div className='bg-neutral-900 top-10 w-[345px] h-[455px] m-auto
    lg:w-[450px] lg:h-[550px] rounded-2xl lg:top-20 relative'>
        <h1 className='text-2xl font-bold top-10 relative w-[300px] m-auto'>?משהו לא היה ברור ואתם רוצים לשאול שאלה</h1>
        <form className='grid'>
           <Input setInput={setFullname} type={"text"} placeholder={"שם מלא"}/>
           <Input setInput={setPhone} type={"phone"} placeholder={"מס' טלפון"}/>
           <Input setInput={setEmail} type={"text"} placeholder={"אימייל"}/>
           <Input setInput={setTextArea} type={"text"} placeholder={"...אני רוצה לדעת עוד על"}/>
         
        </form>
        <Button trigger={sendDetails} BtnName={"שליחה"} bgColor={"pink"}/>
    </div>
  )
}
