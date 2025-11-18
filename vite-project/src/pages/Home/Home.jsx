import React from 'react'
import Header from '../../components/Header/Header'
import "./Home.css"
import HomeCozy from '../../components/Home/HomeCozy/HomeCozy'
import HomeLimitedMenu from '../../components/Home/Limitedmenu/HomeLimitedMenu'
import HomeMenu from '../../components/Home/HomeMenu/HomeMEnu'
import HomeToStart from '../../components/Home/HomeToStart/HomeToStart'
import HomeEntress from '../../components/Home/HomeEntress/HomeEntress'
import HomeSharing from '../../components/Home/HomeSharing/HomeSharing'
import HomeExperience from '../../components/Home/HomeExperience/HomeExperience'
import Footer from '../../components/Footer/Footer'



function Home() {
  return (
    <div className='HomeMainDiv'>
<Header/>
<HomeCozy/>
<HomeLimitedMenu/>
<HomeMenu/>
<HomeToStart/>
<HomeEntress/>
<HomeSharing/>
<HomeExperience/>
<Footer/>

    </div>
  )
}

export default Home