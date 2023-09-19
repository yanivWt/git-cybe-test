import { Button, CardMedia, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Styled from './login.styled';
import cybellumSign from 'assets/images/login/cybellum-sign.svg';
import monitor from 'assets/images/login/imac-dig-twins.png';
import LoginForm from './LoginForm'

export default function Login() {

  const bottomLinks = {
    'Privacy policy': '/privacy-policy',
    'Terms of use': '/terms-of-use',
    'Contact us': '/contact-us',
  };

  return (
    <Styled.Section sx={{ maxWidth:'1770px', display: 'flex'}}>
        <Styled.LoginSection>
            <CardMedia component="img" alt="Cybellum" image={cybellumSign} sx={{ width: 150 }} />
            <Typography variant="h1" sx={{ mt: 4}}>
              Welcome to the <br /> Product Security Platform
            </Typography>
            <LoginForm/>
            <Box>
              {Object.keys(bottomLinks).map((link) => (
                <Button key={link}>{link}</Button>
              ))}
            </Box>
        </Styled.LoginSection>
          <Styled.Monitor>
            <CardMedia component="img" alt="Digital Twins" image={monitor} />
          </Styled.Monitor>
       
    </Styled.Section>
  );
}


