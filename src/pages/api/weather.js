export default async function handler(req, res){
    const key = process.env.WEATHER_API_KEY
    
    const q = 'Cachoeiro de Itapemirim'
    const lang = 'pt'
    const url =`http://api.weatherapi.com/v1/current.json?key=${key}&q=${q}&lang=${lang}`
    const response = await fetch(url)
    const responsedata = await response.json()


    res.status(200).json(responsedata)
}