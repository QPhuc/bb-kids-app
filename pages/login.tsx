import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { Button } from '@mui/material';
import Image from 'next/image';
import WhatsAppLogo from '../assets/images/logo.jpg';
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from '@/config/firebase';

const StyledContainer = styled.div`
    height: 100vh;
    display: grid;
    place-items:center;
    background-color: whitesmoke;
`
const StyledLoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`
const StyleImageWrapper = styled.div`
    margin-bottom: 50px;
`

export default function Login() {
    const [signInWithGoogle, _user, _loading, _error] = useSignInWithGoogle(auth);

    const signIn = () => {
        signInWithGoogle();
    }

    return (
        <StyledContainer>
            <Head>
                <title>Login</title>
            </Head>
            <StyledLoginContainer>
                <StyleImageWrapper>
                    <Image src={WhatsAppLogo} alt="WhatsApp Logo" height={200} width={200} />
                </StyleImageWrapper>
                <Button variant='outlined' onClick={signIn}>SIGN IN WITH GOOGLE</Button>
            </StyledLoginContainer>
        </StyledContainer>
    )
}
