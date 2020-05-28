import theme from "styled-theming";

export const backgroundColor = theme("theme", {
	light: "#fff",
	dark: "#2d2d2d",
});

export const textColor = theme("theme", {
	light: "#000",
	dark: "#fff",
});

export const themes = { light: 'light', dark: 'dark'}
