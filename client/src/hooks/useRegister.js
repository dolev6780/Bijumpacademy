import { useState } from "react";
import {useUserContext} from './useUserContext';
import axios from "axios";
export const useRegister = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const {dispatch} = useUserContext();
    const register =  (firstName, lastName, email, password, isPay) => {
        setIsLoading(true);
        setError(null);
       
        axios.post('/api/user/register', {
            firstName:firstName,
            lastName:lastName,
            email,
            password,
            isPay
            ///////////////////////////////////////////////////
        }).then((res)=> {
            setIsLoading(false);
            localStorage.setItem('user', JSON.stringify(res.data))

            dispatch({type: "LOGIN", payload: res.data})

            console.log(res.data)

        })
        .catch((err)=>{
            setIsLoading(false);
            setIsLoading(err)
            console.log(err);
        })
    }


    return {register, isLoading, error}

}