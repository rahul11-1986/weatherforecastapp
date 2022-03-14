import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Dashboard }  from './pages/dashboard';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./assets/styles/theme";
import { ForecastProvider } from './store/forecast/ForecastContext';
 
const AppComponent = () => {
	return (
	  <ThemeProvider theme={lightTheme}>
			<ForecastProvider>
				<Dashboard />
			</ForecastProvider>
	  </ThemeProvider>
	);
};

ReactDOM.render(
  <React.StrictMode>
    <AppComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
