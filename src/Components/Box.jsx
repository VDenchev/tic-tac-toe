import React from "react"

const Box = ({ value, handleClick }) => {
	const fix = (e) => {
		const offsetY = e.changedTouches[0].target.offsetTop
		const offsetX = e.changedTouches[0].target.offsetLeft
		const width = e.changedTouches[0].target.clientWidth
		const height = e.changedTouches[0].target.clientHeight
		const posY = e.changedTouches[0].clientY
		const posX = e.changedTouches[0].clientX
		if (
			posX >= offsetX &&
			posX < offsetX + width &&
			posY >= offsetY &&
			posY < offsetY + height
		) {
			handleClick()
		}
	}

	const isMobile = () => {
		return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			navigator.userAgent
		)
	}

	return (
		<div
			className=" dark-transition aspect-square rounded-2xl bg-tan dark:bg-dark-100 text-poppy-100 dark:text-grey text-8xl sm:text-6xl md:text-8xl lg:text-9xl overflow-hidden leading-none font-sans flex justify-center cursor-pointer select-none shadow-md"
			onClick={handleClick}
			onTouchEnd={(e) => fix(e)}
			onKeyPress={handleClick}
			tabIndex={0}>
			<span className="m-auto">{isMobile() ? value : value.toUpperCase()}</span>
		</div>
	)
}

export default Box
