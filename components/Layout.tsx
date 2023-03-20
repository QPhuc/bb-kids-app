import React from 'react'
import Header from './Header';
import Footer from './Footer/index';

export default function Layout(props: any) {
    const { children } = props;
    return (
        <div>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}
