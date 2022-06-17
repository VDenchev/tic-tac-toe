import React, { useContext, useState } from "react"
import { ThemeContext } from "../App"
import Box from "./Box"
import GameInfo from "./GameInfo"

function Game() {
	const [turn, setTurn] = useState("x")
	const [boxes, setBoxes] = useState(Array(9).fill(""))
	const [winner, setWinner] = useState("")

	const { isDarkMode, setIsDarkMode } = useContext(ThemeContext)
	console.log(isDarkMode)
	const checkWinner = () => {
		const combos = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		]
		if (winner === "" && boxes.every((box) => box !== "")) {
			setWinner("z")
		}
		combos.forEach((combo) => {
			if (
				boxes[combo[0]] === "" ||
				boxes[combo[1]] === "" ||
				boxes[combo[2]] === "" ||
				winner !== ""
			) {
				return
			}
			if (
				boxes[combo[0]] === boxes[combo[1]] &&
				boxes[combo[1]] === boxes[combo[2]]
			) {
				setWinner(boxes[combo[0]])
			}
		})
	}

	const reset = () => {
		setBoxes(Array(9).fill(""))
		setWinner("")
		setTurn("x")
	}

	const handleClick = (id) => {
		if (boxes[id] !== "" || winner !== "") {
			return
		}
		const squares = boxes
		squares[id] = turn
		setBoxes(squares)
		checkWinner()
		if (turn === "x") {
			setTurn("o")
		} else {
			setTurn("x")
		}
	}

	const boxElements = boxes.map((mark, index) => (
		<Box key={index} value={mark} handleClick={() => handleClick(index)} />
	))
	document.body.className = isDarkMode ? "dark" : ""
	return (
		<>
			<div className=" dark-transition dark:bg-dark-900 flex m-8 p-8 gap-8 flex-col-reverse sm:flex-row items-center justify-evenly rounded-2xl bg-westar shadow-md">
				<GameInfo winner={winner} turn={turn} handleClick={reset} />
				<div className="grid grid-cols-3 gap-2 p-2 bg-blue dark:bg-dark-900 rounded-2xl w-[100%] sm:w-[40vw] shadow-md">
					{boxElements}
				</div>
			</div>
		</>
	)
}

export default Game
