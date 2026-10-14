import { useState } from 'react'
import {Photo} from '../Photo.ts'
import styles from './Manepg.module.scss'
import { NavLink, Link } from 'react-router-dom'


function Manepg() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section className={styles.section1}>
        <div className={styles.text}>
          <p style={{width:"82%"}}><span style={{fontSize:'5.5rem', fontWeight:'700', }}>Creating a Better Tomorrow, One Home at a Time</span></p>
          <p style={{width:"80%"}}>We've built a reputation for delivering exceptional results and exceeding our clients' expectations. From luxurious residential homes to state-of-the-art commercial properties, our team of experts is dedicated to bringing your vision to life.</p>
          <div className={styles.buttons}>
            <div className={styles.but}>
              <button>Schedule a Call</button>
              <button>View Our Projucts</button>
            </div>
            <div className={styles.butfake}></div>
          </div>
        </div>
        <div className={styles.img}></div>
        <div className={styles.comment1}>
            <img src={Photo.girl} alt="" />
            <div className={styles.com_text}>
              <img src={Photo.starts} alt="" />
              <p>I highly recommend, My home exactly what I wanted</p>
              <p>Amanda | Actor</p>              
            </div>
        </div>
        <div className={styles.comment2}>
            <img src={Photo.niga} alt="" />
            <div className={styles.com_text}>
              <img src={Photo.starts} alt="" />
              <p>Pinnacle is my GO-TO when it comes to real estate</p>
              <p>James | CEO of Crazy Bank</p>              
            </div>
        </div>
    </section>
    <section className={styles.section2}>
      <div className={styles.mane_txt_sc2}>
        <p className={styles.p1_sec2}>We're <span><img src={Photo.shape} alt="" /></span> building communities.</p>
        <p className={styles.p2_sec2}>With a commitment to excellence and a focus on innovation, we've established ourselves as a leader in the real estate and construction industry.</p>
        <button>Learn More About Us...</button>
        <div className={styles.comment}>
          <img src={Photo.clients} alt="" />
          <div className={styles.txt_com}>
            <img src={Photo.starts} alt="" />
            <p>4.3/5 Rated by 300+ Professionals</p>
          </div>
        </div>
      </div>
    </section>
    <section className={styles.section3}>

    </section>
    </>
  )
}

export default Manepg