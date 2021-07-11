import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import Layout from '../src/everpurple/Layout';
import Everpurple from '../src/everpurple/Everpurple';
import '../src/everpurple/style.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Head>
        <title>Profile by Hoagie</title>
      </Head>
      <Everpurple>
      <Layout>
      <Component {...pageProps} />
      </Layout>
      </Everpurple>
    </UserProvider>
  );
}