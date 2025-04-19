import React from 'react'
import ArtisanHero from '../components/sections/Artist';
import ArtisanTopProducts from '../components/sections/ArAbout'
import BuyerReviews from '../components/sections/Buyer';

function ArtisanPage() {
  return (
    <div>
      <ArtisanHero/>
      <ArtisanTopProducts/>
      <BuyerReviews/>
    </div>
  )
}

export default ArtisanPage
