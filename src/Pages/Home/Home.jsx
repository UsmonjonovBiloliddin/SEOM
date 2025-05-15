import React from 'react'
import { Header, HomeDocuments, HomeDoses, HomeManagement, HomeReferences, HomeSubscribe, HomeYangiliklar } from '../../Components/index'
const Home = () => {
  document.documentElement.scrollTop = 0;
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