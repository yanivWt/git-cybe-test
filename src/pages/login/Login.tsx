import { CardMedia, Typography } from '@mui/material';
import Styled from './login.styled';
import cybellumSign from 'assets/images/login/cybellum-sign.svg';
import monitor from 'assets/images/login/imac-dig-twins.png';
import LoginForm from './LoginForm'
import Footer from 'components/Footer';

export default function Login() {

  return (
    <Styled.MainSection>
        <Styled.Section>
        <Styled.Content>
          <Styled.Header>
            <Styled.Logo>
              <CardMedia component="img" alt="Cybellum" image={cybellumSign} sx={{ width: 150 }} />
            </Styled.Logo>
            <Typography variant="h1">
              Welcome to the <br /> Product Security Platform
            </Typography>
          </Styled.Header>
          <LoginForm/>
        </Styled.Content>
        <Footer/>
        </Styled.Section>
        <Styled.Monitor>
          <CardMedia component="img" alt="Digital Twins" image={monitor} />
        </Styled.Monitor>
    </Styled.MainSection>
  );
}


