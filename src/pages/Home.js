import React from 'react'
import '../css/page_home.css';
import PageContent from '../components/PageContent';
import homepage from "../data/HomepageData.json";
import '../css/animate.css'

const Home = (props)=> {
  return (
    <div className='home_page_block'>
      <div className='home_inner'>

     < PageContent 
     title={homepage.homepage[0].title} 
     image1={homepage.homepage[0].image1} 
     image2={homepage.homepage[0].image2}
     image3={homepage.homepage[0].image3} 
     image4={homepage.homepage[0].image4}
     image5={homepage.homepage[0].image5}
     open_text={homepage.homepage[0].open_text1}
     open_text1={homepage.homepage[0].open_text2}
     title_text={homepage.homepage[0].title_text}
     typeClass = {homepage.homepage[0].spec_layout} 
     />

    
     
    </div>  
  </div>
  )
}

export default Home
