import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Loading from "./components/Loading";
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {

	const [json, setJson] = useLocalStorage("weather_location", null);
	const [weatherData, setWeatherData] = useLocalStorage("weather_location_data", null);

	const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


	useEffect(() => {

		fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=amsterdam`)
			.then((r) => {
				console.log(r);
				if (r.status === 429) {
					console.warn(r.statusText)
				}
			})
			.then((r) => r.json())
			.then(data => {
				console.log(data);
				setJson(data);
				return fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${data[0].woeid}`);

				// [
				// 	{
				// 		"title": "Amsterdam",
				// 		"location_type": "City",
				// 		"woeid": 727232,
				// 		"latt_long": "52.373119,4.893190"
				// 	}
				// ]
			})
			.catch((e) => console.log('Error: ' + e))
			.then((r) => r.json())
			.then(data => {
				console.log(data);
				setWeatherData(data);
			})
			.then(() => console.log('Success'))
			.catch((e) => console.log('Error: ' + e));
	}, []);


	function createWeather() {
		return weatherData.consolidated_weather.map((element, index) => {
			return <p key={index}>
				<img
					src={"https://www.metaweather.com/static/img/weather/" + element.weather_state_abbr + ".svg"}
					alt={element.weather_state_name}
					width="30px" />
				{daysOfTheWeek[new Date(element.applicable_date).getDay()]},  min:  {Math.floor(element.min_temp)} ℃, max: {Math.floor(element.max_temp)} ℃
			</p>
		})
	}


	return (
		<main>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-6">
						<h1>weather</h1>
						<img src="https://placeimg.com/1024/480/nature" className="rounded img-fluid" alt="Responsive" />
						<div id="weather">
							{(weatherData) ? (
								createWeather()
							) : (<Loading />)}
						</div>
					</div>
				</div>
				<div className='row'>
					<ul>
						<li>Read more about <a href='https://www.metaweather.com/api/' target="_blank" rel="noreferrer">metaweather.com/api/</a></li>
						<li>Read more about <a href='https://cors-anywhere.herokuapp.com/corsdemo' target="_blank" rel="noreferrer">cors-anywhere.herokuapp.com/corsdemo</a></li>
						<li>Read more about <a href='#CORS' target="_blank" rel="noreferrer">CORS</a></li>
					</ul>
					<iframe src='https://cors-anywhere.herokuapp.com/corsdemo' title="demo"></iframe>
				</div>
			</div>
			{/* <!-- /.container --> */}
		</main>
	);
}

export default App;


