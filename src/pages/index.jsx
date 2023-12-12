'use client'
import styles from '../styles/Home.module.css'
import Weather from "@/components/weather"
import {Montserrat} from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})


export default function Home(){
  return(
    <>
      <div className={`${styles.content} ${montserrat.className}`}>
        <h1 className={styles.homeTitulo}>Tempo Agora</h1>
        <div className={styles.weather}>
          <Weather />
        </div>
      </div>
    </>
  )
}