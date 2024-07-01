'use client'
import React, {  createContext, useContext } from "react"
import { reverseGeocode } from "../lib/reverseGeoCoding"
import { getWeatherData } from "../lib/openweathermap"
import { getSearchContent, getTopHeadlines } from "../lib/newsApi"


const Context=createContext()
export const useStateContext=()=>useContext(Context)


export const StateContext =({children})=>{
    const [location, setLocation] = React.useState(null)
    const [cityAddress,setCityAddress]=React.useState(null)
    const [weather,setWeather]=React.useState(null)
    const [topHeadlines,setTopHeadlines]=React.useState(null)

    // function to fetch geolocation co-ordinates
    // latitude and longitude are stored as location object using react usestate hook


    React.useEffect(()=>{
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
              const { latitude, longitude } = position.coords;
              setLocation({ latitude, longitude });
            }, (error) => {
              console.error('Error fetching geolocation:', error);
            });
          } else {
            console.warn('Geolocation API not supported');
          }
    },[])
    

    const redirectToHomePage=async(locationApiKey,weatherApiKey,newsApiKey)=>{
       if(location.latitude&&location.longitude){
        const data= await reverseGeocode(location.latitude,location.longitude,locationApiKey)
        console.log(data);
    
        const reverseGeoCoded={
            country : data.results[0].components.country,
            city: data.results[0].components.city,
            state : data.results[0].components.state,
            countryCode : data.results[0].components.country_code

        }
        const weatherData= await getWeatherData(location.latitude,location.longitude,weatherApiKey)
        const openWeatherData={
            tempMax:weatherData.main.temp_max,
            tempMin:weatherData.main.temp_min,
            weather:weatherData.weather[0].main,
            desc:weatherData.weather[0].description
        }
        const topHeadLines= await getTopHeadlines(data.results[0].components.country_code,newsApiKey)
        setTopHeadlines(topHeadLines.articles)
        setWeather(openWeatherData)
        setCityAddress(reverseGeoCoded)
        
       }
    } 

    const searchContent=async(newsApiKey,query)=>{
       if(query){
        const serchContent= await getSearchContent(cityAddress.countryCode,newsApiKey,query)
        setTopHeadlines(serchContent);
       }
    }



    return(
        <Context.Provider value={{
            location, setLocation,
            redirectToHomePage,
            cityAddress,
            weather,
            topHeadlines,
            searchContent
        }}>
            {children}
        </Context.Provider>
    )
}