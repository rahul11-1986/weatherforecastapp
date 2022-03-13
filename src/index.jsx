import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App }  from './pages/dashboard/App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./assets/styles/theme";
 
const AppComponent = () => {
	return (
	  <ThemeProvider theme={lightTheme}>
		<App />
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
