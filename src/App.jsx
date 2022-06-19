import React, { createContext } from "react"
import Game from "./Components/Game"
import DarkModeToggle from "./Components/DarkModeToggle"

export const ThemeContext = createContext({})

function App() {
	const [isDarkMode, setIsDarkMode] = React.useState(false)

	return (
		<ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
			<div className="dark-transition w-screen h-screen bg-tan dark:bg-dark-100">
				<nav className="dark-transition flex items-center p-5 shadow-md bg-blue dark:bg-dark-900">
					<h1 className="dark-transition text-2xl mr-auto">
						Simple Tic-Tac-Toe
					</h1>
					<p className="dark-transition text-lg font-bold text-dark-100/70 dark:text-grey/70 mr-4">
						Dark mode?
					</p>
					<DarkModeToggle isToggled={isDarkMode} toggle={setIsDarkMode} />
				</nav>
				<Game />
			</div>
		</ThemeContext.Provider>
	)
}

export default App
