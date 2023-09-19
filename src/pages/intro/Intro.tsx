import { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import logo from 'assets/images/cybellum-logo-vertical-black.svg';
import Styled from './intro.styled';
import { useAppSelector } from '../../app/hooks'
import { UserState } from 'slices/user/user.interface';


type userMessage = {
  created: string,
  description: string,
  id: number,
  title: string,
}
export default function Intro() {
  const user: UserState = useAppSelector(state => state.user)
  const [message, setMessage] = useState<userMessage | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')


  /**
   *  TODO use custom hook for fatching or redux in case this data is reused
   */
  useEffect(()=> {
      const url = 'http://localhost:7000/notifications';
      const options = { headers: {"Authorization" : `Bearer ${user?.accessToken}`} };
      const errorMessage = 'Something went wrong'

      async function getData() {
        try{
          setLoading(true)
          const response = await fetch(url,options);
          setLoading(false)
          if(response.ok){
            const data = await response.json();
            setMessage(data[0])
            setError('')
          }else{
            setError(errorMessage)
          }
        }catch(err){
          setLoading(false)
          setError(errorMessage)
        } 
      }

    if(user?.accessToken){
      getData()
    }
  },[user])
  
  return (
    <Styled.Box>
      <Card sx={{ maxWidth: 345, textAlign: 'center' }}>
        <CardContent>
          <Styled.CardMedia component="img" alt="Cybellum" image={logo} />
          <Typography gutterBottom variant="h5" component="div" sx={{ mt: 4 }}>
            {loading ? `Loading...` : message?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {error || message?.description}
          </Typography>
        </CardContent>
      </Card>
    </Styled.Box>
  );
}
