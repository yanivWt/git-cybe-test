import BoxMui from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const Box = styled(BoxMui)(() => ({
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const Fields = styled(BoxMui)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const Input = styled(TextField)`
    display: flex;
    width: 400px;
    flex-direction: column;
    align-items: flex-start;
    & label {
        color: #4D4D4D;
        font-family: Noto Sans;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0.25px;
        padding-left: 16px;
    }
    .MuiInputBase-root{
        height: 48px;
    }
    .MuiOutlinedInput-notchedOutline{
        border-color: green
    }
`

const Submit = styled(Button)`
    color: #2A2118;
    background-color: #BAA182;
    box-shadow: 0px 1px 3px 1px rgba(28, 27, 31, 0.15), 0px 1px 2px 0px rgba(28, 27, 31, 0.30);
    width: 400px;
    &:hover{
        color: #2A2118;
        background-color: #BAA182;
    }
`

const Section = styled(BoxMui)`
    width: 100%;
    min-height: 100%;
    margin: auto;
    padding: 0 25px;
`

const Monitor = styled(BoxMui)`
    padding: 0 0.5% 0 2%;
    flex: 1 1 auto;
    display: flex;
    justify-content: flex-end;

    & img{
        margin-top: 10.7%;
        max-width: 930px;
        object-fit: contain;
    }

    @media (max-width: 1440px){
        position: fixed;
        top: 100px;
        right: 30px;
        width: 50%;
        z-index: -1;
        opacity: 0.1;
    }
    @media (max-width: 1240px) {
        display:none
    }
`

const LoginSection = styled(BoxMui)`
    flex: 0 0 636px;
    margin: 11% 0 0 5%;

    & h1{
        font-size: 56px; 
        letter-spacing: -0.5px;
        line-height: 64px;
    }

    @media (max-width: 768px) {
        flex: 0 0 auto;
        margin: auto;
        & h1{
            font-size: 36px;
            line-height: 1.4; 
        }
    }
`

const styledComponents = {
    Box,
    Section,
    LoginSection,
    Fields,
    Input,
    Submit,
    Monitor
};

export default styledComponents;