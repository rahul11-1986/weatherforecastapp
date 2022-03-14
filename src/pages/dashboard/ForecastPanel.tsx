import React, { useContext, useEffect, useState } from 'react'
import { TextSpan } from './styles';
import styled from 'styled-components';
import { WeatherForecastInfo } from './types';
import { WeatherDetails } from './WeatherDetails';
import { ForecastContext } from '../../store/forecast/ForecastContext';
import { Days, ImagesMapper, MakeWeatherForecastList } from './helper';

const ForecastBox = styled.div`
	display: flex;
	border-top: ${props => `0.2px solid ${props.theme.secondaryColor}`};
	border-right: ${props => `0.2px solid ${props.theme.secondaryColor}`};
	flex-flow: column nowrap;
	padding: 0px;
	margin: 0px;
	align-items: center;
	justify-content: space-around;
	height: 150px;
	padding: 0px 25px;
	cursor: pointer;
`

/** Renders the next 5 days forecast */
export const ForecastPanel = () => {
	
	const { weeklyForecastList } = useContext(ForecastContext);
	const [selectedDay, setSelectedDay] = useState<number>(0);
	const [ weatherForecastList, setWeatherForecastList] = useState<WeatherForecastInfo[]>([]);

	/** Update the forecast list whenever search results are provided */
	useEffect(() => {
		const list = MakeWeatherForecastList(weeklyForecastList);
		setWeatherForecastList(list);
	}, [weeklyForecastList]);

	if (weatherForecastList.length === 0) return null;

	const onForecastSelection = (selectedIndex: number) => setSelectedDay(selectedIndex);

	return (
		<div className="layout"> 
			<WeatherDetails {...weatherForecastList[selectedDay]} />
			<div className="forecast">
			{
				weatherForecastList.map((x, index) => {
					return (
						<ForecastBox key={index} onClick={() => onForecastSelection(index)}>
							<TextSpan size={20}>{Days[x.day]}</TextSpan>
							<img className="icon" src={ImagesMapper[x.icon]}alt="name" width="50" height="50" />
							<span>
								<TextSpan size={18}>{x.currentTemperature}°</TextSpan>
							</span>
							<TextSpan size={12}>{x.description}</TextSpan>
						</ForecastBox>
					)
				})
			}
			</div>
		</div>
	)
}