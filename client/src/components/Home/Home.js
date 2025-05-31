import React from 'react'
import styles from './Home.module.css'

const Home = () => {
   
    return (
        <div className={styles.pageContainer}>
            
            <section className={styles.hero}>
                <h1>Effortless billing for freelancers and small businesses.</h1>
                <div className={styles.paragraph}>
                   
                    <p>A free and open-source billing application built using the MERN stack.</p>
                </div>
                <div className={styles.imgContainer}>
                    <img src="/icons/uiimage.jpg" alt="invoicing-app"/>
                </div>
            </section>
        </div>
    )
}

export default Home
