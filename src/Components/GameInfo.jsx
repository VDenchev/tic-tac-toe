import React, { useContext } from "react"
import { ThemeContext } from "../App"
const GameInfo = ({ winner, turn, handleClick }) => {
	const { isDarkMode, setIsDarkMode } = useContext(ThemeContext)
	return (
		<div className="flex items-center flex-col sm:items-start sm:w-[40%]">
			{winner === "" ? (
				<h1 className="dark-transition text-3xl">
					Turn:{" "}
					<span className="text-poppy-100 dark:text-poppy-200 text-4xl">
						{turn}
					</span>
				</h1>
			) : (
				<>
					<h1 className="dark-transition text-3xl text-center sm:text-left">
						<span className="text-poppy-100 dark:text-poppy-200 text-3xl">
							{winner === "z" ? "Nobody" : winner}
						</span>{" "}
						is the winner!
					</h1>
					<button
						className="dark-transition mt-8 p-6 rounded-2xl bg-poppy-100 hover:bg-poppy-900 dark:bg-poppy-200 hover:dark:bg-poppy-200/95 text-2xl text-westar dark:text-grey font-bold shadow-sm border border-dark-900/10"
						onClick={handleClick}>
						Play again!
					</button>
				</>
			)}
		</div>
	)
}

export default GameInfo
