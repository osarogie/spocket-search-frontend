import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import { SearchBar } from '../components/SearchBar'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <SearchBar />
  </div>
)

export default Home
