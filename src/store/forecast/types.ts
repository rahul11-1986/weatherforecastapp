import { WeeklyForecastDtls } from "../../services/forecast/forecast.types";

/** Contains weekly forecast list data */
export interface ForecastContextType {
	weeklyForecastList: WeeklyForecastDtls[];
	storeForecastList?: (list: WeeklyForecastDtls[]) => void;
}