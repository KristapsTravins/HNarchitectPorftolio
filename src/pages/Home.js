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
     text={homepage.homepage[0].text}
     typeClass = {homepage.homepage[0].spec_layout} 
     />

     < PageContent 
     title={homepage.homepage[1].title} 
     image1={homepage.homepage[1].image1} 
     image2={homepage.homepage[1].image2} 
     text={homepage.homepage[1].text} 
     typeClass = {homepage.homepage[1].spec_layout} 
     />


    < PageContent 
     title={homepage.homepage[2].title} 
     image1={homepage.homepage[2].image1} 
     image2={homepage.homepage[2].image2} 
     text={homepage.homepage[2].text} 
     typeClass = {homepage.homepage[2].spec_layout} 
     /> 
     
    </div>  
  </div>
  )
}

export default Home
