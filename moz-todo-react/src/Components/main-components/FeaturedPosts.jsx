import React from 'react'
import FeaturePost from "../Product-cards/FeaturePost"

function FeaturedPosts() {
    return (
      <>
        <header className='feature-header'>
          <p>Practice Advice</p>
          <b>Featured Posts</b>
        </header>
        <main className='feature-holder'>
        <FeaturePost />
          <FeaturePost />
          <FeaturePost />
          <FeaturePost />
          <FeaturePost />
          <FeaturePost />
       </main>
        </>
  )
}

export default FeaturedPosts