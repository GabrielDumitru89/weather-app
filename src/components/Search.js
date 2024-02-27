import React, { useState, useEffect } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions, OPEN_CAGE_API_KEY } from "../api";

const Search = ({ onSearchChange }) => {
	const [search, setSearch] = useState(null);

	const loadOptions = async (inputValue) => {
		try {
			const response = await fetch(
				`${GEO_API_URL}/cities?minPopulation=50000&namePrefix=${inputValue}`,
				geoApiOptions
			);
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const response_1 = await response.json();
			return {
				options: response_1.data?.map((city) => {
					return {
						value: `${city.latitude} ${city.longitude}`,
						label: `${city.name}, ${city.countryCode}`,
					};
				}),
			};
		} catch (err) {
			console.error(err);
			// Return a default value when the fetch request fails
			return { options: [] };
		}
	};
	const loadUserLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const { latitude, longitude } = position.coords;
					fetch(
						`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${OPEN_CAGE_API_KEY}`
					)
						.then((response) => {
							if (!response.ok) {
								throw new Error(`HTTP error! status: ${response.status}`);
							}
							return response.json();
						})
						.then((data) => {
							const userLocation = {
								value: `${latitude} ${longitude}`,
								label: data.results[0].formatted, // Use the formatted address from the API response
							};
							setSearch(userLocation);
							onSearchChange(userLocation); // Notify the App component about the change
						})
						.catch((err) => console.error("Failed to fetch city name:", err));
				},
				(error) => {
					console.error("Geolocation error:", error);
				}
			);
		} else {
			console.error("Geolocation is not supported by this browser.");
		}
	};

	useEffect(() => {
		loadUserLocation();
	}, []);

	const handleOnChange = (searchData) => {
		setSearch(searchData);
		onSearchChange(searchData);
	};

	return (
		<AsyncPaginate
			placeholder="Search for City"
			debounceTimeout={600}
			value={search}
			onChange={handleOnChange}
			loadOptions={loadOptions}
		/>
	);
};

export default Search;
