
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primaryColor: string;
    secondaryColor: string;
  }
}

export const lightTheme: DefaultTheme = {
	primaryColor: "#0783ED",
	secondaryColor: "#D9E9F7"
};

export const darkTheme: DefaultTheme = {
	primaryColor: "#000",
	secondaryColor: "#666"
};

