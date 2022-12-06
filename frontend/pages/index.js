import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import About from './About';
import Contact from './Contact';
import Blog from './Blog';

export default function Home() {
  return (
    <div className='home-content'>
      <p>Al-Hira's website purpose is to spread the teachings of islam all over the world and specially facilitate Australian muslims with teachings of Islam.</p>  
      <div  className='home-button'>
      <button className='home-button-write'>Write to us</button>
      </div>    
    </div>
    
  )
}
