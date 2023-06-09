import { auth } from '@/config/firebase';
import { signOut } from 'firebase/auth';
import Head from 'next/head'
import Link from 'next/link'
import { wrapper } from 'app/store';
import { useSelector } from 'react-redux';
import { selectProfile, setProfileData } from '@/app/store/slices/profile';

export default function Home() {
  const profile = useSelector(selectProfile);
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Head>
        <title>BB Kids Shop</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,700;0,900;1,200;1,300;1,600&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <button onClick={logout}>Logout</button>
        <h1>{ profile.name }</h1>
        <button><Link href="/products/1">Detail Products</Link></button>
      </main>
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async ({resolvedUrl}) => {
  store.dispatch(setProfileData('Phuc Tran'));
  return {
    props: {
      resolvedUrl
    }
  }
})
