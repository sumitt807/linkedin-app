import styled from 'styled-components'

const Login = () => {
    return (
        <Container>
            <Nav>
                <a href="/">
                    <img alt="Test" src="/images/login-logo.svg" />
                </a>
                <div>
                    <Join>Join Now</Join>
                    <Join>Sign in</Join>
                </div>
            </Nav>
        </Container>
    )
}

const Container = styled.div`
padding: 0px;
`;
const Nav = styled.nav`
max-width: 1128px;
margin: auto;
display: flex;
flex-wrap: nowrap;
align-items: center;
justify-content: space-between;

& > a{
    width: 135px;
    height: 34px;
    @media(max-width: 786px){
        padding: 0px 5px;
    }
}
`;

const Join = styled.a`
font-size: 16px;
padding: 10px 12px;
text-decoration: none;
color: rgba(0,0,0,0.6);
border-radius: 4px;
cursor: pointer;
&:hover{
    background-color: rgba(0,0,0,0.08);
    color: rgba(0,0,0,0.9);   
    text-decoration: none;
}
`;
export default Login