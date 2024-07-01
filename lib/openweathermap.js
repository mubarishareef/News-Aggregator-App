export async function getWeatherData(latitude, longitude, apiKey) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error fetching weather data: ${response.status}`);
      }
      const data = await response.json();
      return data; // Return the weather data object
    } catch (error) {
      console.error('Error:', error);
      return null; // Handle errors by returning null
    }
  }