import React, { FC, useState, createContext } from 'react';
import { WeeklyForecastDtls } from '../services/forecast/forecast.types';

interface ForecastContextType {
	weeklyForecastList: WeeklyForecastDtls[];
	storeForecastList?: (list: WeeklyForecastDtls[]) => void;
}

export const ForecastContext = createContext<ForecastContextType>({
	weeklyForecastList: []
});

export const ForecastProvider: FC<ForecastContextType> = ({children}) => {

	const [weeklyForecastList, setWeeklyForecastList] = useState<WeeklyForecastDtls[]>([]);

	const storeForecastList = (list: WeeklyForecastDtls[]) => setWeeklyForecastList(list);

	return (
		<ForecastContext.Provider value={{weeklyForecastList, storeForecastList}}>
			{children}
		</ForecastContext.Provider>
	)
}