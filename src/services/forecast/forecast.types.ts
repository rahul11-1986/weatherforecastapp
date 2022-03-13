export interface WeeklyForecastDtls {
	main: WeatherInfo;
	weather: IconInfo;
	wind: WindInfo;
}

interface WeatherInfo {
	temp: string;
	temp_max: string;
	temp_min: string;
	humidity: string;
	pressure: string;
	sea_level: string;
}

interface IconInfo {
	id: number;
	main: string;
	icon: string;
	description: string;
}

interface WindInfo {
	deg: number;
	gust: number;
	speed: number;
}