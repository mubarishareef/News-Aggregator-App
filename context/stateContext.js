'use client'
import React, {  createContext, useContext } from "react"
import { reverseGeocode } from "../lib/reverseGeoCoding"

const Context=createContext()
export const useStateContext=()=>useContext(Context)


export const StateContext =({children})=>{
    const [location, setLocation] = React.useState(null)
    const [cityAddress,setCityAddress]=React.useState(null)

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
    
    const redirectToHomePage=async()=>{
       if(location.latitude&&location.longitude){
        const apiKey="90cee52c0ffd46c4ae4a8c9ca6e1fa3c"
        const data= await reverseGeocode(location.latitude,location.longitude,apiKey)
        console.log(data);
        const reverseGeoCoded={
            country : data.results[0].components.country,
            city: data.results[0].components.city,
            state : data.results[0].components.state,
            countryCode : data.results[0].components.country_code

        }
        setCityAddress(reverseGeoCoded)
       }
    } 



    return(
        <Context.Provider value={{
            location, setLocation,
            redirectToHomePage,
            cityAddress
        }}>
            {children}
        </Context.Provider>
    )
}