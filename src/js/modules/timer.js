const timer = (selector, deadline) => {
	const calcDeadline = (endTime) => {
		const time = Date.parse(endTime) - Date.parse(new Date()),
			days = Math.floor(time / (1000 * 60 * 60 * 24)),
			hours = Math.floor((time / (1000 * 60 * 60)) % 24),
			minutes = Math.floor((time / (1000 * 60)) % 60),
			seconds = Math.floor((time / 1000) % 60);

		return {
			total: time,
			days: days,
			hours: hours,
			minutes: minutes,
			seconds: seconds,
		};
	};

	const getZero = (num) => {
		return num < 10 ? `0${num}` : num;
	};

	const renderTime = (selector, endTime) => {
		const timer = document.querySelector(selector),
			days = timer.querySelector('#days'),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds'),
			clockInterval = setInterval(updateTime, 1000);

		updateTime();

		function updateTime() {
			const time = calcDeadline(endTime);

			days.textContent = getZero(time.days);
			hours.textContent = getZero(time.hours);
			minutes.textContent = getZero(time.minutes);
			seconds.textContent = getZero(time.seconds);

			time.total <= 0 ? clearInterval(clockInterval) : null;
		}
	};

	renderTime(selector, deadline);
};

export default timer;
