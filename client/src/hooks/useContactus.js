import { useState } from "react";
import axios from "axios";
export const useContactus = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const contactus = (fullName, phone, email, textArea) => {
        setIsLoading(true);
        setError(null);
       
        axios.post('/api/contactus', {
            fullName,
            phone,
            email,
            textArea
        }).then((res)=> {
            setIsLoading(false);
            console.log(res.data)
        })
        .catch((err)=>{
            setIsLoading(false);
            setIsLoading(err)
            console.log(err);
        })
    }


    return {contactus, isLoading, error}

}