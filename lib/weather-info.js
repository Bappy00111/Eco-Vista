export const getWeatherData = async (lat, lon) => {
  // console.log("Fetching weather data for:", lat, lon);

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=metric`
    );
    const data = await res.json();

    return data?.weather[0];
  } catch (error) {
    console.error(error.message);
  }
};

export const getTemperatureData = async (lat, lon) => {
  // console.log("Fetching temperature data for:", lat, lon);

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=metric`
    );
    const data = await res.json();

    return data?.main;
  } catch (error) {
    console.error(error.message);
  }
};


export const getWindData = async (lat, lon) => {
  // console.log("Fetching temperature data for:", lat, lon);

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=metric`
    );
    const data = await res.json();

    return data?.wind;
  } catch (error) {
    console.error(error.message);
  }
};

export const getAQIData = async (lat, lon) => {
  try{
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
    );
    const data = await res.json();

    return data?.list[0]?.main && data?.list[0]?.components ? data.list[0] : null;
  }catch (error) {
    console.error("Error fetching AQI data:", error.message);
    
  }
}
