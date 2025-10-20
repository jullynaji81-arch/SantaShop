import React from 'react'
import  Header  from '../components/Home/header'

import  Categories   from '../components/Home/home_category'
import  HomeShopping   from '../components/Home/home_shopping'
import  HomeContact   from '../components/Home/home_contact'
import  Footer   from '../components/Home/footer'

function Home () {
  return (
    <div>
       <Header/>
       <HomeShopping/>
       <Categories/>
       <HomeContact/>
       <Footer/>

    </div>
  );
}
export default Home;
