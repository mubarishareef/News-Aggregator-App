export async function getTopHeadlines(countryCode,apiKey) {
    const url = `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${apiKey}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error fetching top headlines: ${response.status}`);
      }
      const data = await response.json();
      return data; // Return the response data containing headlines
    } catch (error) {
      console.error('Error:', error);
      return null; // Handle errors by returning null
    }
  }



  export async function getSearchContent(countryCode,apiKey,query) {
    const url = `https://newsapi.org/v2/everything?q=${query}country=${countryCode}&apiKey=${apiKey}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error fetching top headlines: ${response.status}`);
      }
      const data = await response.json();
      return data; // Return the response data containing headlines
    } catch (error) {
      console.error('Error:', error);
      return null; // Handle errors by returning null
    }
  }