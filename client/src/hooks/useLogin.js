import { useState } from "react";
import {useUserContext} from './useUserContext';
import axios from "axios";
export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const {dispatch} = useUserContext();
    const login = (email, password) => {
        setIsLoading(true);
        setError(null);
       
        axios.post('/api/user/login', {
            email,
            password,
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


    return {login, isLoading, error}

}