

export async function reverseGeocode(latitude, longitude,apiKey) {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${apiKey}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error fetching location data: ${response.status}`);
      }
      const data = await response.json();
      return data; // Return the response data containing location details
    } catch (error) {
      console.error('Error:', error);
      return null; // Handle errors by returning null
    }
  }