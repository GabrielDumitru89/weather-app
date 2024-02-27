import React from "react";
import styles from "./styles/CurrentWeather.module.css";

const CurrentWeather = ({ data }) => {
	return (
		<div className={styles.weather}>
			<div className={styles.top}>
				<div>
					<p className={styles.city}>{data.city}</p>
					<p className={styles.weatherDescription}>
						{data.weather[0].description}
					</p>
				</div>
				<img
					alt="weather"
					className={styles.weatherIcon}
					src={`/icons/${data.weather[0].icon}.png`}
				/>
			</div>
			<div className={styles.bottom}>
				<p className={styles.temperature}>{Math.round(data.main.temp)}&deg;C</p>
				<div className={styles.details}>
					<div className={styles.parameterRow}>
						<span className={styles.parameterLabel}>Details</span>
					</div>
					<div className={styles.parameterRow}>
						<span className={styles.parameterLabel}>Feels like</span>
						<span className={styles.parameterValue}>
							{Math.round(data.main.feels_like)} &deg;C
						</span>
					</div>
					<div className={styles.parameterRow}>
						<span className={styles.parameterLabel}>wind</span>
						<span className={styles.parameterValue}>{data.wind.speed} m/s</span>
					</div>
					<div className={styles.parameterRow}>
						<span className={styles.parameterLabel}>humidity</span>
						<span className={styles.parameterValue}>
							{data.main.humidity} %
						</span>
					</div>
					<div className={styles.parameterRow}>
						<span className={styles.parameterLabel}>pressure</span>
						<span className={styles.parameterValue}>
							{data.main.pressure} kpa
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CurrentWeather;
