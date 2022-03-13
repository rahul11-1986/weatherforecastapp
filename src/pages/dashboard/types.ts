
export interface TextSpanProps {
	size: number;
	margin?: number;
	shadow?: boolean;
}

export interface WeatherForecastInfo {
	max: number;
	min: number;
	current: string;
	date: Date;
	day: number;
	icon: string;
	description: string;
	humidity: number;
	pressure: number;
	wind: number;
	sealevel: number;
}