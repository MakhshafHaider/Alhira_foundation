import react from "react";
import Image from 'next/image';
import Link from 'next/link';
import logo from '../images/al-hira-logo-2.svg';
import logoLine from '../images/blue-dot-left-bars.svg'

function Navbar(){
    return <nav className="navbar">
        <div className="navbar-image">
        <Image  className="navbar-image-logo" src={logo} alt="Al hira foundation" width={120} height={120}/>
       <Image className="navbar-image-line" src={logoLine} alt="These are dotted lines" width={206} height={102}/>
       </div>
       <div >
        <ul className="navbar-link">
        <Link href="/About"> <button  className="navbar-about">About </button></Link>
        <Link href="/Blog"> <button  className="navbar-blog">Blog</button></Link>
        <Link href="/Contact" > <button className="navbar-contact">Contact </button></Link>
        </ul>
        
       </div>
    </nav>
}
export default Navbar;