export const geoApiOptions = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": `${process.env.REACT_APP_RAPID_API_KEY}`,
		"X-RapidAPI-Host": `${process.env.REACT_APP_RAPID_API_HOST}`,
	},
};

export const GEO_API_URL = process.env.REACT_APP_GEO_API_URL;

export const WEATHER_API_URL = process.env.REACT_APP_WEATHER_API_URL;

export const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const OPEN_CAGE_API_KEY = process.env.REACT_APP_OPEN_CAGE_API_KEY;
