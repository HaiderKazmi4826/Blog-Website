import React from 'react'
import Features from '../components/Features'
import QuickRead from '../components/QuickRead'
import OlderPosts from '../components/OlderPosts'
import PopularTags from '../components/PopularTags'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  return (
    <>
    <Features />
    <QuickRead />
    <OlderPosts />
    <PopularTags />
    <NewsLetter />
    </>
  )
}

export default Home