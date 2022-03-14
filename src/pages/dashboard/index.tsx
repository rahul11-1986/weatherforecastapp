import React, { useContext, useRef, useState } from 'react';
import './Dashboard.css';
import styled from 'styled-components';
import { Button } from '../../ui/button/button';
import { ForecastPanel } from './ForecastPanel';
import { ForecastContext } from '../../store/forecast/ForecastContext';
import { ForecastService } from '../../services/forecast/forecast.service';

const Container = styled.div`
	height: 477px; 
	width: 610px;
	font-size: 14px;
	color: ${props => props.theme.primaryColor};	
	border: ${props => `2px solid ${props.theme.secondaryColor}`};
`

const SearchPanel = styled.div`
	display: flex;
	border: ${props => `10px solid ${props.theme.secondaryColor}`};
`

/** Renders dashboard to show weather forecast */
export const Dashboard = () => {

	const searchCityTextField = useRef<HTMLInputElement>(null);
	const [hasForecastLoaded, setForecastLoadStatus] = useState<boolean>(false);
	const { weeklyForecastList, storeForecastList } = useContext(ForecastContext);

	/**
	 * Get the weather forecast for the next 5 days
	 */
	const onSearchButtonClick = async () => {

		if (!searchCityTextField.current.value)  return;

		const result = await ForecastService.getWeeklyForecastByCity(searchCityTextField.current.value);
		
		// Store forecast list in context 
		storeForecastList(result);
		setForecastLoadStatus(true);
	}

	const showNoRecordAvailableMessage = hasForecastLoaded && weeklyForecastList.length === 0;

	return (
		<div className="main">
			<Container>
				<SearchPanel className='search-box'>
					<input className='search-input' type="search" ref={searchCityTextField} placeholder="Search city" required/>
					<Button type="button" onClick={onSearchButtonClick}>Search</Button>
				</SearchPanel>
				{
					showNoRecordAvailableMessage ? 
					<div className="error-message">No record found.</div> : 
					<ForecastPanel />
				}
			</Container>
		</div>
	)
}