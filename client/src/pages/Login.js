import styled from 'styled-components/macro';

const StyledContainer = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 150px 16px;

    .login-link {
        background-color: var(--green);
        color: var(--black);
        font-family: var(--font-acc);
        font-weight: 700;
        padding: 10px 20px;
        margin: 20px auto;
        border-radius: 30px;
        display: inline-block;
    }
`;

const Login = () => {
    return (
        <StyledContainer>
             <a href="http://localhost:8888/login" className="login-link">
                Log in to Spotify
            </a>
        </StyledContainer>
    );
}

export default Login;