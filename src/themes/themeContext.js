import theme from "styled-theming";

export const backgroundColor = theme("theme", {
	light: "#ffe7ec",
	dark: "rgb(21, 32, 43)",
});

export const textColor = theme("theme", {
	light: "#000",
	dark: "#fff",
});

export const hoverColor = theme("theme", {
	light: "#cc0052",
	dark: "#FF838E",
})

export const themes = { light: 'light', dark: 'dark'}
