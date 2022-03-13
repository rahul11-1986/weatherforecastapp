import { WeatherForecastInfo } from './types';
import fewclouds from './images/coolbreeze.png'
import lightrain from '../../assets/images/lightrainfall.png';
import brokenclouds from '../../assets/images/lightrainfall.png';
import sunlightdrizzle from '../../assets/images/sunlightdrizzle.png';
import clearsky from '../../assets/images/sunny.png';
import thunderstorm from '../../assets/images/thunderstorm.png';
import { WeeklyForecastDtls } from '../../services/forecast/forecast.types';

export const Days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const Images: Record<string, ImageBitmap> = {
	"01d": clearsky,
	"01n": fewclouds,
	"02d": clearsky,
	"02n": fewclouds,
	"04n": brokenclouds,
	"04d": brokenclouds,
	"10d": lightrain,
	"10n": sunlightdrizzle,
	"03d": thunderstorm,
	"03n": thunderstorm
};

export function MakeWeatherForecastList(weeklyForecastlist: WeeklyForecastDtls[]): WeatherForecastInfo[] {

	console.log(weeklyForecastlist);
	const forecastList: WeatherForecastInfo[] = [];
	
	weeklyForecastlist.forEach(x => {

		let date = x.dt_txt;
		if (date && !forecastList.some(x => x.date === date)) {
			
			let weatherDtls: WeatherForecastInfo = {
				max : x.main.temp_max,
				min : x.main.temp_min,
				current : (Math.round(x.main.temp) - 273.15).toFixed(1),
				date: date,
				day: new Date(date).getDay(), 
				icon: x.weather[0].icon,
				description: x.weather[0].main,
				humidity: x.main.humidity,
				pressure: x.main.pressure,
				wind: x.wind.speed,
				sealevel: x.main.sea_level
			}

			forecastList.push(weatherDtls);
		}
	});

	return forecastList;
}