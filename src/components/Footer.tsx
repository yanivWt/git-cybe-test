import Styled from './footer.styled';

export default function Login() {

  const bottomLinks = {
    'Privacy policy': '/privacy-policy',
    'Terms of use': '/terms-of-use',
    'Contact us': '/contact-us',
  };

  return (
    <Styled.Footer>
        {Object.keys(bottomLinks).map((link) => (
            <Styled.ButtonLink key={link}>{link}</Styled.ButtonLink>
        ))}
    </Styled.Footer>
  );
}