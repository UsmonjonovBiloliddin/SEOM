import React from 'react'
import { Header, HomeDocuments, HomeDoses, HomeManagement, HomeReferences, HomeSubscribe, HomeYangiliklar } from '../../App'

const Home = () => {
  return (
    <div className='Home'>
      <Header/>
      <HomeDoses/>
      <HomeYangiliklar/>
      <HomeDocuments/>
      <HomeManagement/>
      <HomeReferences/>
      <HomeSubscribe/>
    </div>
  )
}

export default Home