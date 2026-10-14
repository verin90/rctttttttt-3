import { useState } from 'react'
import './App.css'
import {Photo} from './Photo.ts'
import styles from './Header.module.scss'
import { NavLink, Link } from 'react-router-dom'

function Header() {
  const [count, setCount] = useState(0)

  const [active, setActive] = useState(1)

  return (
    <>
     <header>
        <Link to="/"><img src={Photo.logo} alt="" /></Link>
        <nav>
            <NavLink to={"1"} className={({ isActive }) => (isActive ? `${styles.active} ${styles.activee}` : "")}>Home</NavLink>
            <NavLink to={"2"} className={({isActive}) => (isActive ? `${styles.active} ${styles.active}`:"")}>About Us</NavLink>
            <NavLink to={"3"} className={({isActive}) => (isActive ? `${styles.active} ${styles.active}`:"")}>Projects</NavLink>
            <NavLink to={"4"} className={({isActive}) => (isActive ? `${styles.active} ${styles.active}`:"")}>Services</NavLink>
            <NavLink to={"6"} className={({isActive}) => (isActive ? `${styles.active} ${styles.active}`:"")}>News</NavLink>
        </nav>
        <button
          className={active === 1 ? styles.active : ""}
          onClick={() => setActive(1)}
          
        >Contact us</button>
     </header>
    </>
  )
}

export default Header
