import React, { useContext, useEffect, useState } from 'react'
import { TextSpan } from './styles';
import { WeatherForecastInfo } from './types';
import { ForecastContext } from '../../store/ForecastContext';
import { Days, Images, MakeWeatherForecastList } from './helper';

export const ForecastSummaryList = () => {
	
	const { weeklyForecastList } = useContext(ForecastContext);
	const [ weatherForecastList, setWeatherForecastList] = useState<WeatherForecastInfo[]>([]);

	useEffect(() => {
		const list = MakeWeatherForecastList(weeklyForecastList);
		setWeatherForecastList(list);
	}, [weeklyForecastList]);

	if (weatherForecastList.length === 0) return null;

	return (
		<div className="forecast">{
			weatherForecastList.map((x,index) => {
				return (
					<div className="box" key={index}>
						<TextSpan size={20}>{Days[x.day]}</TextSpan>
						<img className="icon" src={Images[x.icon]} alt="name" width="50" height="50"/>
						<span>
							<TextSpan size={18}>{x.current}°</TextSpan>
						</span>
						<TextSpan size={12}>{x.description}</TextSpan>
					</div>
				)
			})
		}</div>
	)
}