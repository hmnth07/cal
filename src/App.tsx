import React from "react";
import "./App.css";
import Calendar from "./components/Calendar/Calendar";

function App() {
	return (
		<div className="App">
			<Calendar date={"2023-04-19"} />
		</div>
	);
}

export default App;
