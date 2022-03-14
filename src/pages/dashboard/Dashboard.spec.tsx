import React, { ReactNode } from 'react';
import { Dashboard } from './index';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { ForecastProvider } from '../../store/forecast/ForecastContext'
import { WeeklyForecastDtls } from '../../services/forecast/forecast.types';
import { ForecastService } from '../../services/forecast/forecast.service';

const forecastDtls: WeeklyForecastDtls = {
	dt_txt: new Date("2022-03-14 12:00:00"),
	main: {
		temp: 293.42,
		temp_max: 293.42,
		temp_min: 293.11,
		humidity: 77,
		pressure: 1019,
		sea_level: 1019
	},
	weather: [{
		id: 500,
		icon: "10n",
		main: "Rain",
		description: "light rain"
	}],
	wind: {
		deg: 106,
		gust: 4.9,
		speed: 3.57
	}
}

const renderWithContext = (component: ReactNode) => {

	const list: WeeklyForecastDtls[] = [];
	const storeForecastList = () => list.push(forecastDtls);

	return {
	  	...render(
		  	<ForecastProvider weeklyForecastList={[]} storeForecastList={storeForecastList}>
			  {component}
		  	</ForecastProvider>)
	}
}

const getWeeklyForecastByCity = jest.spyOn(ForecastService, "getWeeklyForecastByCity");
getWeeklyForecastByCity.mockImplementation(async () => [forecastDtls]);

afterEach(cleanup);

test('renders only search input field and button', () => {
	render(<Dashboard />); 
	const searchTextField = screen.getByTestId("search-field");
	const searchButton = screen.getByText(/Search/i);
	const errorDiv = screen.queryByTestId("error-msg-panel");
	expect(searchTextField).toBeInTheDocument();
	expect(searchButton).toBeInTheDocument();
	expect(errorDiv).toBeNull();
});

test('Fetch forecast', () => {
	renderWithContext(<Dashboard />);
	const searchTextField = screen.getByTestId("search-field");
	searchTextField.textContent = "Sydney";
	const searchButton = screen.getByText(/Search/i);
	fireEvent.click(searchButton);
	const tempSpan = screen.queryByTestId("temperature");
	expect(tempSpan).toBeNull();
});