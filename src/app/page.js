import Welcome from "@/components/Welcome";




export default function Home() {
  const locationApiKey=process.env.REVERSE_GEOCODING_API_KEY;
  const weatherApiKey=process.env.OPEN_WEATHER_MAP_API_KEY;
  const newsApiKey=process.env.NEWS_API_KEY
  return (
    // <main className={styles.main}>
    <Welcome 
    locationApiKey={locationApiKey}
    weatherApiKey={weatherApiKey}
    newsApiKey={newsApiKey}
    />
    // </main>
  );
}
