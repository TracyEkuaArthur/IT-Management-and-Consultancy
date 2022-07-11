import React from 'react'
import HomeHeader from "../../components/home_components/HomeHeader";
import Section1 from "../../components/home_components/section1"
import Section2 from "../../components/home_components/section2";
import Section3 from "../../components/home_components/section3";
import Section4 from "../../components/home_components/section4"


const Home = () => {
  return (
    <div>
      <HomeHeader/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
    </div>
  )
}

export default Home