import React from "react"

const DarkModeToggle = ({ isToggled, toggle }) => {
	return (
		<label className="switch">
			<input
				type="checkbox"
				checked={isToggled}
				onClick={() => toggle((prev) => !prev)}
			/>
			<span className="slider round"></span>
		</label>
	)
}

export default DarkModeToggle
