import moment from 'moment';
import { WeatherForecastInfo } from './types';
import clearsky from '../../assets/images/sunny.png';
import fewclouds from '../../assets/images/coolbreeze.png'
import lightrain from '../../assets/images/lightrainfall.png';
import thunderstorm from '../../assets/images/thunderstorm.png';
import brokenclouds from '../../assets/images/lightrainfall.png';
import sunlightdrizzle from '../../assets/images/sunlightdrizzle.png';
import { WeeklyForecastDtls } from '../../services/forecast/forecast.types';

export const Days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

/** Maps the icon to the images */
export const ImagesMapper: Record<string, string> = {
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

/** Populates the forecast list */
export function MakeWeatherForecastList(weeklyForecastlist: WeeklyForecastDtls[]): WeatherForecastInfo[] {

	const forecastList: WeatherForecastInfo[] = [];
	
	// Iterate through each item in the list
	weeklyForecastlist.forEach(x => {

		// Add unique day to the weekly forecast list
		if (!forecastList.some(item =>  AreTwoDateSame(x.dt_txt, item.date))) {
			
			let weatherDtls: WeatherForecastInfo = {
				max : x.main.temp_max,
				min : x.main.temp_min,
				currentTemperature : (Math.round(x.main.temp) - 273.15).toFixed(1),
				date: x.dt_txt,
				day: new Date(x.dt_txt).getDay(), 
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

/** Compares two dates to check if they are same. */
function AreTwoDateSame(firstDate: Date, secondDate: Date) {
	const formattedFirstDate = moment(firstDate).format('YYYY-MM-DD');
	const formattedSecondDate = moment(secondDate).format('YYYY-MM-DD');
	return moment(formattedFirstDate).isSame(formattedSecondDate);
}