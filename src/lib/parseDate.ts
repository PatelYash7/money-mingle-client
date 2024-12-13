export function parseDateTime(dateTimeString: Date) {
	const dateObj = new Date(dateTimeString);

	const date = {
		year: dateObj.getFullYear(),
		month: dateObj.getMonth() + 1,
		day: dateObj.getDate(),
	};

	const formattedDate = `${String(date.day).padStart(2, '0')}-${String(date.month).padStart(2, '0')}-${date.year}`;
	const time = {
		hours: dateObj.getHours(),
		minutes: dateObj.getMinutes(),
	};

	const formattedTime = `${String(time.hours).padStart(2, '0')}:${String(time.minutes).padStart(2, '0')}`;
	return {
		date: formattedDate,
		time: formattedTime,
	};
}
