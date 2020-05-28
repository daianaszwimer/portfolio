import theme from "styled-theming";

export const backgroundColor = theme("theme", {
	light: "#fff",
	dark: "rgb(21, 32, 43)",
});

export const textColor = theme("theme", {
	light: "#000",
	dark: "#fff",
});

export const themes = { light: 'light', dark: 'dark'}
