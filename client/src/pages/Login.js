import styled from 'styled-components/macro';

const StyledLoginLink = styled.a`
    background-color: var(--green);
    color: var(--black);
    font-family: var(--font-acc);
    font-weight: 700;
    padding: 10px 20px;
    margin: 20px auto;
    border-radius: 30px;
    display: inline-block;
`;

const Login = () => {
    return (
        <div>
             <StyledLoginLink href="http://localhost:8888/login">
                Log in to Spotify
            </StyledLoginLink>
        </div>
    );
}

export default Login;