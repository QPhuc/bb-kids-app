import React from 'react'
import Header from '../Header';
import Footer from '../Footer/index';
import { StyledContainer } from './styled';

export default function Layout(props: any) {
    const { children } = props;
    return (
        <>
            <Header />
            <StyledContainer>
                {children}
            </StyledContainer>
            <Footer />
        </>
    )
}
