import React from 'react'
import '../css/page_home.css';
import PageContent from '../components/PageContent';
import homepage from "../data/HomepageData.json";

const Home = (props)=> {

  console.log(homepage.homepage[0].title)
  return (
    <div className='home_page_block'>
      <div className='home_inner'>

     < PageContent 
     title={homepage.homepage[0].title} 
     image1={homepage.homepage[0].image1} 
     image2={homepage.homepage[0].image2} 
     text={homepage.homepage[0].text}
     typeClass = {homepage.homepage[0].spec_layout} 
     />

     < PageContent 
     title={homepage.homepage[1].title} 
     image1={homepage.homepage[1].image1} 
     image2={homepage.homepage[1].image2} 
     text={homepage.homepage[1].text} 
     />
     
    </div>  
  </div>
  )
}

export default Home
