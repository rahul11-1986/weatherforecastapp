import React, { useContext, useRef } from 'react';
import './App.css';
import styled from 'styled-components';
import { Button } from '../../ui/button/button';
import { ForecastSummaryList } from './ForecastSummaryList';
import { ForecastContext } from '../../store/ForecastContext';
import { ForecastService } from '../../services/forecast/forecast.service';

const Container = styled.div`
	height: 477px; 
	width: 610px;
	font-size: 14px;
	border: black 2px solid;
	color: ${props => props.theme.primaryColor};	
`

const SearchPanel = styled.div`
	display: flex;
	border: ${props => `10px solid ${props.theme.secondaryColor}`};
`

export const App = () => {

	const { storeForecastList } = useContext(ForecastContext);
	const searchCityTextField = useRef<HTMLInputElement>(null);

	/**
	 * Get the weather forecast for the next 5 days
	 */
	const onSearchButtonClick = async () => {
		const result = await ForecastService.getWeeklyForecastByCity(searchCityTextField.current.value);
		storeForecastList(result);
	}

	return (
		<div className="main">
			<Container>
				<SearchPanel className='search-box'>
					<input className='search-input' type="search" ref={searchCityTextField} placeholder="Search city" required/>
					<Button type="button" onClick={onSearchButtonClick}>Search</Button>
				</SearchPanel>
				<ForecastSummaryList />
			</Container>
		</div>
	)
}