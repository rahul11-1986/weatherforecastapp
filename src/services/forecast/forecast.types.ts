export interface WeeklyForecastDtls {
	dt_txt: Date;
	main: WeatherInfo;
	weather: IconInfo[];
	wind: WindInfo;
}

interface WeatherInfo {
	temp: number;
	temp_max: number;
	temp_min: number;
	humidity: number;
	pressure: number;
	sea_level: number;
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