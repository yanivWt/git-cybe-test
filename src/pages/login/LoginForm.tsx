import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Button, TextField } from '@mui/material';
import Styled from './login.styled';
import { useAppDispatch } from '../../app/hooks'
import { setUser } from '../../slices/user/userSlice'
import { useNavigate } from "react-router-dom";
import { AuthRequestType as FormValues } from '../../api/auth/auth.interface';
import {useLoginMutation} from '../../api/auth/auth'


const defaultFormValues = {
  email: "",
  password: "",
}

export default function LoginForm() {
  const [updatePost, loginData ] = useLoginMutation()
  const dispatch = useAppDispatch()
  const navigate = useNavigate();

  const { handleSubmit, register, setError, formState: { errors }, } = useForm<FormValues>({ defaultValues: defaultFormValues });

  /**
   * TODO save accessToken in cookie insted of store
   */
  useEffect(()=> {

    if(loginData?.data?.accessToken){
      dispatch(setUser(loginData.data));
      navigate("/");
    }else if(loginData?.error){
      setError('password', {
        type: "server",
        message: `The email or password you entered don't match`,
      });
    }

  },[loginData, dispatch, navigate, setError])

  const onSubmit = (data: FormValues) => updatePost(data);

  const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; // basic email pattern

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Styled.Fields>
            <TextField 
                label="Email" 
                type="email"
                {...register("email", { 
                  pattern: {
                    value: emailPattern,
                    message: "Invalid email format",
                  },  
                  required: "Email is required" 
                })}
                error={!!errors.email || errors?.password?.type === "server"}
                helperText={errors.email?.message}
                sx={{ mt: 4,  maxWidth: '400px' }} 
            /> 
            <TextField 
                label="Password" 
                type="password"
                {...register("password", { required: "Password is required" })}
                error={!!errors.password}
                helperText={errors.password?.message}
                sx={{ mt: 4,  maxWidth: '400px' }} 
            />
            <Button>Forgot your password?</Button>
            <Styled.Submit fullWidth sx={{ mt: 4, mb: 4, clear: 'both' }} type="submit">
                Log in
            </Styled.Submit>
        </Styled.Fields>
    </form>
  )
}