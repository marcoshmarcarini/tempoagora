'use client'

import { useEffect, useState } from "react"
import styles from '../../styles/Weather.module.css'

export default function Weather() {
    const [city, setCity] = useState("São Paulo")
    const [weather, setWeather] = useState([])

    const fetchData = async () => {
        const key = 'b525c50128f14e40b9e142442230712'
        const lang = 'pt'
        const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&lang=${lang}`
        const response = await fetch(url)
        const responseData = await response.json()
        setWeather(responseData)
    }

    useEffect(() => { fetchData() }, [])

    var colorUV = ''
    return (
        <>
            <div className={styles.weatherForm}>
                <input type="text" placeholder="Escolha a Cidade" onChange={(e) => setCity(e.target.value)} />
                <button onClick={fetchData}>Enviar</button>
            </div>
            <div className={styles.weatherResult}>
                {weather && weather.location && weather.current ? (
                    <div className={styles.weatherCard}>
                        <p className={styles.weatherCity}>{weather.location.name}</p>
                        <p className={styles.weatherTemp}>{weather.current.temp_c} ºC</p>
                        <img src={weather.current.condition.icon} alt="" className={styles.weatherImg} />
                        <div>
                            <ul>
                                <li className={styles.weatherSubTemp}>Sensação Térmica: {weather.current.feelslike_c} ºC</li>
                                <li>Velocidade do Tempo: {weather.current.wind_kph}</li>
                                <li>Umidade: {weather.current.humidity}</li>
                                <li>
                                    Direção do Vento <br />
                                    <div className={styles.windDiv}>
                                        <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/2585D9/right--v1.png" alt="right--v1" className={styles.weatherWind} style={{ transform: `rotate(${weather.current.wind_degree}deg)` }} />
                                        <img width="50" height="50" src="https://img.icons8.com/ios/50/687B8C/rgb-circle-1.png" alt="rgb-circle-1" className={styles.wetherWindRoad} />
                                    </div>
                                </li>
                                <li>
                                    UV: <br />
                                    {
                                        weather.current.uv > 0 && weather.current.uv <= 2 ?
                                            (<p className={styles.uv} style={{ backgroundColor: '#14ED11' }}>{weather.current.uv}</p>) :
                                            weather.current.uv > 2 && weather.current.uv <= 5 ?
                                                (<p className={styles.uv} style={{ backgroundColor: '#EDC711' }}>{weather.current.uv}</p>) :
                                                weather.current.uv > 5 && weather.current.uv <= 7 ?
                                                    (<p className={styles.uv} style={{ backgroundColor: '#F09315' }}>{weather.current.uv}</p>) :
                                                    weather.current.uv > 7 && weather.current.uv <= 10 ?
                                                        (<p className={styles.uv} style={{ backgroundColor: '#F11E14' }}>{weather.current.uv}</p>) :
                                                        weather.current.uv > 10 ?
                                                            (<p className={styles.uv} style={{ backgroundColor: '#BA25F5' }}>{weather.current.uv}</p>) :
                                                            ''
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                ) : null}
            </div>
        </>
    )
}