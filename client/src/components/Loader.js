import styled from 'styled-components/macro';

const StyledLoader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    background-color: var(--dark-grey);

    .loader {
        width: 8px;
        height: 48px;
        display: inline-block;
        position: relative;
        border-radius: 4px;
        color: var(--green);
        box-sizing: border-box;
        animation: animloader 0.6s linear infinite;
    }

    @keyframes animloader {
        0% {
            box-shadow: 20px -10px, 40px 10px, 60px 0px;
        }
        25% {
            box-shadow: 20px 0px, 40px  0px, 60px 10px;
        }
        50% {
            box-shadow: 20px 10px, 40px -10px, 60px 0px;
        }
        75% {
            box-shadow: 20px 0px, 40px 0px, 60px -10px;
        }
        100% {
            box-shadow: 20px -10px, 40px 10px, 60px 0px;
        }
    }
`;

const Loader = () => (
  <StyledLoader>
    <span className="loader"></span>
  </StyledLoader>
);

export default Loader;