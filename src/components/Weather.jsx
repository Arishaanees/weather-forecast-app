// import React, { useState, useEffect, useRef } from "react";

// import search_icon from "../assets/search.png";
// import clear_icon from "../assets/clear.png";
// import humidity_icon from "../assets/humidity.png";
// import wind_icon from "../assets/wind.png";
// import cloud_icon from "../assets/cloud.png";
// import drizzle_icon from "../assets/drizzle.png";
// import rain_icon from "../assets/rain.png";
// import snow_icon from "../assets/snow.png";

// const Weather = () => {
//   const inputRef = useRef();
//   const [weatherData, setWeatherData] = useState(false);
//   const [forecast, setForecast] = useState([]);

//   const getIconByCode = (code) => {
//     switch (code) {
//       case "01d":
//       case "01n":
//         return clear_icon;
//       case "02d":
//       case "02n":
//       case "03d":
//       case "03n":
//         return cloud_icon;
//       case "04d":
//       case "04n":
//         return drizzle_icon;
//       case "09d":
//       case "09n":
//       case "10d":
//       case "10n":
//         return rain_icon;
//       case "13d":
//       case "13n":
//         return snow_icon;
//       default:
//         return clear_icon;
//     }
//   };

//   const search = async (city) => {
//     const apiKey = import.meta.env.VITE_APP_ID;
//     if (!apiKey) return alert("API key missing");

//     if (city.trim() === "") return alert("Enter city name");

//     try {
//       const res = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
//       );
//       const data = await res.json();
//       if (!res.ok) return alert(data.message);

//       setWeatherData({
//         humidity: data.main.humidity,
//         windSpeed: data.wind.speed,
//         temperature: Math.floor(data.main.temp),
//         location: data.name,
//         condition: data.weather[0].description,
//         icon: getIconByCode(data.weather[0].icon),
//       });

//       const forecastRes = await fetch(
//         `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
//       );
//       const forecastData = await forecastRes.json();

//       if (forecastRes.ok) {
//         const daily = forecastData.list
//           .filter((item) => item.dt_txt.includes("12:00:00"))
//           .slice(0, 5);

//         setForecast(
//           daily.map((day) => ({
//             date: day.dt_txt,
//             temp: Math.floor(day.main.temp),
//             icon: getIconByCode(day.weather[0].icon),
//           }))
//         );
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     search("London");
//   }, []);

//   return (
//     <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center p-4 sm:p-6">
//       {/* Search bar */}
//       <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
//         <img
//           src={search_icon}
//           alt="search"
//           className="w-8 h-8 cursor-pointer"
//           onClick={() => search(inputRef.current.value)}
//         />
//         <input
//           ref={inputRef}
//           type="text"
//           placeholder="Search city"
//           className="flex-1 border-b border-gray-600 bg-transparent outline-none px-2 py-1 text-lg"
//           onKeyDown={(e) => e.key === "Enter" && search(inputRef.current.value)}
//         />
//         <button
//           onClick={() => search(inputRef.current.value)}
//           className="px-4 py-1 bg-gray-800 text-white rounded-full shadow mt-2 sm:mt-0"
//         >
//           Search
//         </button>
//       </div>

//       {/* Current Weather */}
//       {weatherData && (
//         <div className="mt-8 sm:mt-10 text-center">
//           <h2 className="uppercase tracking-wide text-gray-700 flex items-center justify-center gap-2 text-lg sm:text-xl">
//             📍 {weatherData.location}
//           </h2>
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2">
//             <p className="text-5xl sm:text-7xl font-bold text-gray-900">
//               {weatherData.temperature}°
//             </p>
//             <img src={weatherData.icon} alt="weather" className="w-20 h-20 sm:w-24 sm:h-24" />
//           </div>
//           <p className="capitalize text-gray-700 mt-2 text-sm sm:text-base">
//             {weatherData.condition.includes("overcast")
//               ? "Cloudy"
//               : weatherData.condition}
//           </p>

//           {/* Humidity + Wind */}
//           <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-10 mt-6 text-gray-700">
//             <div className="flex flex-col items-center">
//               <img src={humidity_icon} alt="humidity" className="w-6 h-6 mb-1" />
//               <p>{weatherData.humidity}%</p>
//               <span className="text-sm">Humidity</span>
//             </div>
//             <div className="flex flex-col items-center">
//               <img src={wind_icon} alt="wind" className="w-6 h-6 mb-1" />
//               <p>{weatherData.windSpeed} km/h</p>
//               <span className="text-sm">Wind</span>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Forecast */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 mt-8 sm:mt-12 w-full max-w-4xl">
//         {forecast.map((day, i) => (
//           <div key={i} className="flex flex-col items-center text-gray-800">
//             <span className="font-semibold text-sm sm:text-base">
//               {new Date(day.date).toLocaleDateString("en-US", {
//                 weekday: "short",
//               })}
//             </span>
//             <img src={day.icon} alt="forecast" className="w-14 h-14 sm:w-16 sm:h-16 my-0.5 sm:my-1" />
//             <p className="text-sm sm:text-base">{day.temp}°</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Weather;
// import React, { useState, useEffect, useRef } from "react";

// import search_icon from "../assets/search.png";
// import clear_icon from "../assets/clear.png";
// import humidity_icon from "../assets/humidity.png";
// import wind_icon from "../assets/wind.png";
// import cloud_icon from "../assets/cloud.png";
// import drizzle_icon from "../assets/drizzle.png";
// import rain_icon from "../assets/rain.png";
// import snow_icon from "../assets/snow.png";

// const Weather = () => {
//   const inputRef = useRef();
//   const [weatherData, setWeatherData] = useState(false);
//   const [forecast, setForecast] = useState([]);

//   const getIconByCode = (code) => {
//     switch (code) {
//       case "01d":
//       case "01n":
//         return clear_icon;
//       case "02d":
//       case "02n":
//       case "03d":
//       case "03n":
//         return cloud_icon;
//       case "04d":
//       case "04n":
//         return drizzle_icon;
//       case "09d":
//       case "09n":
//       case "10d":
//       case "10n":
//         return rain_icon;
//       case "13d":
//       case "13n":
//         return snow_icon;
//       default:
//         return clear_icon;
//     }
//   };

//   const search = async (city) => {
//     const apiKey = import.meta.env.VITE_APP_ID;
//     if (!apiKey) return alert("API key missing");

//     if (city.trim() === "") return alert("Enter city name");

//     try {
//       const res = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
//       );
//       const data = await res.json();
//       if (!res.ok) return alert(data.message);

//       setWeatherData({
//         humidity: data.main.humidity,
//         windSpeed: data.wind.speed,
//         temperature: Math.floor(data.main.temp),
//         location: data.name,
//         condition: data.weather[0].description,
//         icon: getIconByCode(data.weather[0].icon),
//       });

//       const forecastRes = await fetch(
//         `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
//       );
//       const forecastData = await forecastRes.json();

//       if (forecastRes.ok) {
//         const daily = forecastData.list
//           .filter((item) => item.dt_txt.includes("12:00:00"))
//           .slice(0, 5);

//         setForecast(
//           daily.map((day) => ({
//             date: day.dt_txt,
//             temp: Math.floor(day.main.temp),
//             icon: getIconByCode(day.weather[0].icon),
//           }))
//         );
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     search("London");
//   }, []);

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-200">
//       <div className="bg-white shadow-md rounded-2xl p-6 w-[350px]">
//         {/* Search bar */}
//         <div className="flex items-center gap-2 mb-6">
//           <img
//             src={search_icon}
//             alt="search"
//             className="w-6 h-6 cursor-pointer"
//             onClick={() => search(inputRef.current.value)}
//           />
//           <input
//             ref={inputRef}
//             type="text"
//             placeholder="Search city"
//             className="flex-1 outline-none bg-transparent text-gray-700 text-sm"
//             onKeyDown={(e) => e.key === "Enter" && search(inputRef.current.value)}
//           />
//           <button
//             onClick={() => search(inputRef.current.value)}
//             className="px-3 py-1 bg-gray-800 text-white rounded-lg text-sm shadow"
//           >
//             Search
//           </button>
//         </div>

//         {/* Current Weather */}
//         {weatherData && (
//           <div className="text-center">
//             <h2 className="text-gray-700 flex items-center justify-center gap-1 text-sm">
//               📍 {weatherData.location}
//             </h2>
//             <p className="text-6xl font-bold text-gray-900">
//               {weatherData.temperature}°
//             </p>
//             <div className="flex justify-center items-center gap-2 mt-1">
//               <img src={weatherData.icon} alt="weather" className="w-10 h-10" />
//               <p className="capitalize text-gray-700 text-sm">
//                 {weatherData.condition}
//               </p>
//             </div>
//           </div>
//         )}

//         {/* Forecast */}
//         <div className="mt-6 space-y-3">
//           {forecast.map((day, i) => (
//             <div
//               key={i}
//               className="flex justify-between items-center text-gray-800 border-b border-gray-100 pb-2 last:border-none"
//             >
//               <span className="text-sm font-medium">
//                 {new Date(day.date).toLocaleDateString("en-US", {
//                   weekday: "short",
//                 })}
//               </span>
//               <img src={day.icon} alt="forecast" className="w-6 h-6" />
//               <p className="text-sm">{day.temp}°</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Weather;
import React, { useState, useEffect, useRef } from "react";

import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import humidity_icon from "../assets/humidity.png";
import wind_icon from "../assets/wind.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";

const Weather = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(false);
  const [forecast, setForecast] = useState([]);

  const getIconByCode = (code) => {
    switch (code) {
      case "01d":
      case "01n":
        return clear_icon;
      case "02d":
      case "02n":
      case "03d":
      case "03n":
        return cloud_icon;
      case "04d":
      case "04n":
        return drizzle_icon;
      case "09d":
      case "09n":
      case "10d":
      case "10n":
        return rain_icon;
      case "13d":
      case "13n":
        return snow_icon;
      default:
        return clear_icon;
    }
  };

  const search = async (city) => {
    const apiKey = import.meta.env.VITE_APP_ID;
    if (!apiKey) return alert("API key missing");
    if (city.trim() === "") return alert("Enter city name");

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = await res.json();
      if (!res.ok) return alert(data.message);

      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        condition: data.weather[0].description,
        icon: getIconByCode(data.weather[0].icon),
      });

      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
      );
      const forecastData = await forecastRes.json();

      if (forecastRes.ok) {
        const daily = forecastData.list
          .filter((item) => item.dt_txt.includes("12:00:00"))
          .slice(0, 5);

        setForecast(
          daily.map((day) => ({
            date: day.dt_txt,
            temp: Math.floor(day.main.temp),
            icon: getIconByCode(day.weather[0].icon),
          }))
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    search("London");
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200 p-4">
      <div className="bg-white shadow-lg rounded-3xl p-6 sm:p-10 w-full max-w-2xl">
        {/* Search bar */}
        <div className="flex items-center gap-3 mb-10 border-b-2 border-gray-700 pb-2">
          <img
            src={search_icon}
            alt="search"
            className="w-7 h-7 cursor-pointer"
            onClick={() => search(inputRef.current.value)}
          />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search city"
            className="flex-1 outline-none bg-transparent text-gray-800 text-lg sm:text-xl"
            onKeyDown={(e) => e.key === "Enter" && search(inputRef.current.value)}
          />
          <button
            onClick={() => search(inputRef.current.value)}
            className="px-5 py-2 bg-gray-800 text-white rounded-xl text-sm sm:text-base shadow-md hover:bg-gray-700"
          >
            Search
          </button>
        </div>

        {/* Current Weather */}
        {weatherData && (
          <div className="text-center">
            <h2 className="text-gray-700 flex items-center justify-center gap-1 text-xl sm:text-2xl">
              📍 {weatherData.location}
            </h2>
            <p className="text-6xl sm:text-7xl font-bold text-gray-900 mt-2">
              {weatherData.temperature}°
            </p>
            <div className="flex justify-center items-center gap-3 mt-3">
              <img src={weatherData.icon} alt="weather" className="w-20 h-20" />
              <p className="capitalize text-gray-700 text-lg sm:text-xl">
                {weatherData.condition}
              </p>
            </div>

            {/* Humidity + Wind */}
            <div className="flex justify-center gap-12 mt-8 text-gray-700">
              <div className="flex flex-col items-center">
                <img src={humidity_icon} alt="humidity" className="w-8 h-8 mb-1" />
                <p className="text-lg sm:text-xl">{weatherData.humidity}%</p>
                <span className="text-sm">Humidity</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={wind_icon} alt="wind" className="w-8 h-8 mb-1" />
                <p className="text-lg sm:text-xl">{weatherData.windSpeed} km/h</p>
                <span className="text-sm">Wind</span>
              </div>
            </div>
          </div>
        )}

        {/* Forecast */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-5 gap-4">
          {forecast.map((day, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-gray-100 rounded-xl p-4 shadow-sm"
            >
              <span className="font-medium text-base sm:text-lg">
                {new Date(day.date).toLocaleDateString("en-US", {
                  weekday: "short",
                })}
              </span>
              <img src={day.icon} alt="forecast" className="w-12 h-12 my-2" />
              <p className="text-lg sm:text-xl">{day.temp}°</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Weather;
