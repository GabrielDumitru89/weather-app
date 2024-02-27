import React from "react";
import styles from "./styles/Forecast.module.css";
import {
	Accordion,
	AccordionItem,
	AccordionItemButton,
	AccordionItemHeading,
	AccordionItemPanel,
} from "react-accessible-accordion";

const weekDays = [
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
	"Sunday",
];

const Forecast = ({ data }) => {
	const dayInAWeek = new Date().getDay();
	const forecastdays = weekDays
		.slice(dayInAWeek, weekDays.length)
		.concat(weekDays.slice(0, dayInAWeek));
	return (
		<>
			<label className={styles.title}>Daily</label>
			<Accordion allowZeroExpanded>
				{data.list.splice(0, 7).map((item, idx) => (
					<AccordionItem key={idx}>
						<AccordionItemHeading>
							<AccordionItemButton>
								<div className={styles.dailyItem}>
									<img
										alt="weather"
										className={styles.iconSmall}
										src={`icons/${item.weather[0].icon}.png`}
									/>
									<label className={styles.day}>{forecastdays[idx]}</label>
									<label className={styles.description}>
										{item.weather[0].description}
									</label>
									<label className={styles.minMax}>
										{Math.round(item.main.temp_min)} &deg;C /{" "}
										{Math.round(item.main.temp_max)} &deg;C
									</label>
								</div>
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<div className={styles.dailyDetailsGrid}>
								<div className={styles.dailyDetailsGridItem}>
									<label>Pressure</label>
									<label>{item.main.pressure} kpa</label>
								</div>
								<div className={styles.dailyDetailsGridItem}>
									<label>Humidity</label>
									<label>{item.main.humidity} %</label>
								</div>
								<div className={styles.dailyDetailsGridItem}>
									<label>Clouds</label>
									<label>{item.clouds.all} %</label>
								</div>
								<div className={styles.dailyDetailsGridItem}>
									<label>Wind Speed</label>
									<label>{item.wind.speed} m/s</label>
								</div>
								<div className={styles.dailyDetailsGridItem}>
									<label>Sea Level</label>
									<label>{item.main.sea_level} m</label>
								</div>
								<div className={styles.dailyDetailsGridItem}>
									<label>Feels Like</label>
									<label>{Math.round(item.main.feels_like)} &deg;C</label>
								</div>
							</div>
						</AccordionItemPanel>
					</AccordionItem>
				))}
			</Accordion>
		</>
	);
};

export default Forecast;
