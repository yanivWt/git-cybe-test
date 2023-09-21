import { CardMedia } from '@mui/material';
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

const MainSection = styled(BoxMui)`
    display: flex;
    max-width:1770px; 
    width: 100%;
    min-height: 100%;
    margin: auto;
    padding: 0 25px;
`

const Section = styled(BoxMui)`
    display: flex; 
    justify-content: space-between; 
    flex-direction: column; 
    flex-grow: 1; 
    padding-left: 5.2%;
    @media (max-width: 768px) {
        padding-left: 0;
    }
`

const Content = styled(BoxMui)`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 56px;
    flex: 0 0 636px;
    margin-top: 193px;
    @media (max-width: 1240px) {
        margin-top: 100px;
    }
    @media (max-width: 768px) {
        margin-top: 70px;
    }
`

const Header = styled(BoxMui)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    & h1{
        font-size: 56px;
        font-weight: 300;
        line-height: 64px;
        letter-spacing: -0.5px;
        color: #1C1B1F
    }
    @media (max-width: 768px) {
        & h1{
            font-size: 32px;
            line-height: 1.4; 
        }
    }
`

const Fields = styled(BoxMui)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 48px;
`

const Input = styled(TextField)`
    display: flex;
    width: 400px;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    border-radius: 4px;

    @media (max-width: 768px) {
        width: 360px;
    }

    & > .MuiInputBase-root{
        height: 48px;  
        input{
            line-height: 24px;
            letter-spacing: 0.5px;
            color: #1C1B1F
        }
    }

    & .MuiFormHelperText-root{
        display: flex;
        width: 328px;
        align-items: flex-start;
        gap: 10px;
        margin:0;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.4px;
        margin-bottom: 12px;
    }

    & > .MuiInputLabel-root{
        display: flex;
        align-items: center;
        gap: 4px;
        position: absolute;
        top: -19px;
        color: #4D4D4D;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.25px;
        padding-left:16px;
        &.Mui-focused{
            color: #46416D;
        }
        &.Mui-error{
            color: ${({ theme }) => theme?.palette?.error?.main || 'red'}
        }
    }

    .MuiInputBase-root{
        .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-notchedOutline:hover{
            border: 1px solid #7B7B7B;
        }
        &.Mui-focused .MuiOutlinedInput-notchedOutline{
            border: 1px solid #46416D;
        }
        &.Mui-error .MuiOutlinedInput-notchedOutline{
            border: 1px solid ${({ theme }) => theme?.palette?.error?.main || 'red'};
        }
    }
`

const Submit = styled(Button)`
    width: 400px;
    padding: 8px 12px;
    gap: 4px;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: #2A2118;
    background-color: #BAA182;
    &:hover{
        color: #2A2118;
        background-color: #BAA182;
        box-shadow: 0px 1px 3px 1px rgba(28, 27, 31, 0.15), 0px 1px 2px 0px rgba(28, 27, 31, 0.30);
    }
    @media (max-width: 768px) {
        width: 360px;
    }
`

const Monitor = styled(BoxMui)`
    padding: 0 0 0 2%;
    flex: 1 1 auto;
    display: flex;
    justify-content: flex-end;

    & img{
        margin-top: 12.8%;
        max-width: 926px;
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

const ForgetPassword = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 2px 4px;
    align-items: center;
    gap: 4px;
    line-height: 20px;
    letter-spacing: 0.1px;
`

const Logo = styled(CardMedia)`
    display: flex;
    height: 55px;
    padding-right: 0px;
    align-items: center;
    align-self: stretch;
`

const styledComponents = {
    Box,
    MainSection,
    Section,
    Content,
    Header,
    Fields,
    Input,
    Submit,
    Monitor,
    ForgetPassword,
    Logo,
};

export default styledComponents;
