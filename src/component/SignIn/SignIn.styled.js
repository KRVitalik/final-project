import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainContainer = styled.section`
width: 375px;
height: 100vh;
padding: 24px 20px;
background: linear-gradient(168deg, #040404 14.75%, rgba(4, 4, 4, 0.00) 52.97%), linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0.00) 66.68%), url(<path-to-image>), lightgray 50% / cover no-repeat;
`

const SignInTitle = styled.h2`
color: #EFEDE8;
font-family: Roboto;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 1.17; /* 116.667% */

margin-bottom: 14px;
`
const SignInText = styled.p`
color: rgba(239, 237, 232, 0.30);
font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 1.29; /* 128.571% */

margin-bottom: 28px;
`

const SignInForm = styled.form`
display: flex;
flex-direction: column;
gap: 14px;
`

const SignInFormInput = styled.input`
color: rgba(239, 237, 232, 0.60);

font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 1.29; /* 128.571% */

display: flex;
padding: 14px 286px 14px 14px;
align-items: center;
gap: 10px;
border-radius: 12px;
border: 1px solid rgba(239, 237, 232, 0.30);

width: 100%;
background-color: transparent;
`

const SignInButton = styled.button`
color: #EFEDE8;

font-family: Roboto;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 1.125; /* 112.5% */

display: flex;
padding: 12px 40px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 12px;
border: 0;
background: var(--orange, #E6533C);

margin-bottom: 12px;
`

const SignInLinkText = styled.p`
color: rgba(239, 237, 232, 0.60);

font-feature-settings: 'clig' off, 'liga' off;
font-family: Roboto;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 1.5; /* 150% */
`

const SignInLink = styled(Link)`
color: #EFEDE8;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Roboto;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 1.5;
text-decoration-line: underline;
`

export {
    MainContainer,
    SignInTitle,
    SignInText,
    SignInForm,
    SignInFormInput,
    SignInButton,
    SignInLinkText,
    SignInLink,
}