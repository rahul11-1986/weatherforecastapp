import { WeeklyForecastDtls } from "./forecast.types";

/**
 * Service to get the weather forecast.
 */
export class ForecastService {

	/**
	 * Get weekly weather forecast by city
	 */
	static async getWeeklyForecastByCity(cityName: string): Promise<WeeklyForecastDtls[]> {
		
		let forecastList: WeeklyForecastDtls[] = [];

		const url = `${process.env.REACT_APP_APP_URL}?q=${cityName}&appid=${process.env.REACT_APP_APP_ID}`;

		try {
			const response = await fetch(url);

			if (response?.ok) {
				const { list } = await response.json();
				forecastList = list;
			}
		}
		catch(ex) {
			console.log('error', ex);
		}

		return forecastList;
	}
}

const instance = new ForecastService();
export { instance as ForecastServiceInstance };