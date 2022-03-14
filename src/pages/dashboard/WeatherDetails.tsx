import React from 'react';
import { TextSpan } from './styles';
import styled from 'styled-components';
import { WeatherForecastInfo } from './types';

const Paragraph = styled.p`
	font-weight: bold;
`

/** Renders the weather details */
export const WeatherDetails = (props: WeatherForecastInfo) => {

	const { currentTemperature, humidity, pressure, wind} = props;

	return (
		<div className="picker">
			<div className="temperature">
				<TextSpan shadow size={100}>{currentTemperature}</TextSpan>
				<TextSpan shadow margin={17} size={40}>°C</TextSpan>
			</div>
			<div className="detail">
				<Paragraph>Humidity: {humidity}%</Paragraph>
				<Paragraph>Pressure: {pressure} MB</Paragraph>
				<Paragraph>Wind: {Math.round(wind * 18/5)} KM/H</Paragraph>
			</div>
		</div>
	)
}