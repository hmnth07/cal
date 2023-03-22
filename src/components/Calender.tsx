import React from "react";

function Calender() {
	const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
	return (
		<div>
			<p>October 2025</p>
			<div className="daysOfWeek">
				{daysOfWeek?.map((x) => (
					<span>{x}</span>
				))}
			</div>
			<div className="dates">
				<div className="date">1</div>
				<div className="date">2</div>
				<div className="date">1</div>
				<div className="date">2</div>
				<div className="date">1</div>
				<div className="date">2</div>
				<div className="date">1</div>
				<div className="date">2</div>
				<div className="date">1</div>
				<div className="date">2</div>
				<div className="date">1</div>
				<div className="date">2</div>
			</div>
		</div>
	);
}

export default Calender;
