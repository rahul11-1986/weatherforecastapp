import styled from 'styled-components';

/** Renders the button with the provided color */
export const Button = styled.button`
	flex: 1;
	color: white;
	border-right: 0;
	cursor: pointer;
	background: ${props => props.theme.primaryColor};
  	border-top: ${props =>  `1px solid ${props.theme.primaryColor}`};
  	border-bottom: ${props =>  `1px solid ${props.theme.primaryColor}`};
`