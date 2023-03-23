import React from "react";
import moment from "moment";
import "./Calendar.css";

function Calendar({ date }: { date: any }) {
	const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

	const daysInMonth = moment(date).daysInMonth();
	const currentDAY = Number(moment(date).format("D"));
	const startOfMonth = Number(moment(date).startOf("month").format("e")); // weekdays-> 0 1 2 ..6

	// start of month emptySlots
	const emptySlots = [];
	for (let i = 0; i < startOfMonth; i++) {
		emptySlots.push(<div className="emptySlot"></div>);
	}

	const days = [];
	for (let i = 1; i <= daysInMonth; i++) {
		days.push(
			<div className={i === currentDAY ? "currentDay" : "date"}>{i}</div>
		);
	}

	return (
		<div className="calendar">
			<p>{moment(date).format("MMMM YYYY")}</p>
			<div className="daysOfWeek">
				{daysOfWeek?.map((x, index) => (
					<span key={index}>{x}</span>
				))}
			</div>
			<div className="dates">
				{emptySlots}
				{days}
			</div>
		</div>
	);
}

export default Calendar;
