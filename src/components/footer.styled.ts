import BoxMui from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';


const ButtonLink = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;
    align-items: center;
    gap: 4px;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.15px;
`

const Footer = styled(BoxMui)`
    display:flex;
    width: 400px;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
        width: 360px;
    }
`

const styledComponents = {
    ButtonLink,
    Footer
};

export default styledComponents;
