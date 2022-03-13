import styled from 'styled-components';
import { TextSpanProps } from './types';

export const TextSpan = styled.span<TextSpanProps>`
	font-weight: 600;
	font-size: ${props => props.size}px;
	margin-top: ${props => props.margin && props.margin}px;
	text-shadow: ${props => props.shadow && '4px 4px 0 rgba(0,0,0,0.1)'};
`