import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'
import food from '../images/food1.jpg';
import '../styles/Home.css'

const Home = () => {
  return (
    <>
    <Layout>

   <div className="home" 
  //  style={{backgroundImage:`url(${food})`}}
   >
    <div className="headercontainer">
      <h1>Food WEbsite</h1>
      <p>Best FOOd in india</p>

    <Link to="/menu"><button> order Now</button></Link>
    </div>
   </div>
    </Layout>
    
    </>
  )
}

export default Home