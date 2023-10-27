import { DateTime } from 'luxon';

export const makeConvertedDate = ({unixDate, lang}) => {
	const luxonDate = DateTime.fromMillis(unixDate * 1000).setLocale(lang); //""uk", "en"
	const year = luxonDate.year;
	const monthNumber = luxonDate.month;
	const monthName = luxonDate.toFormat('MMMM').split('')
			.map((letter, index) => index === 0 ? letter.toUpperCase(): letter); // UpperCase first letter
	const day = luxonDate.day;
	const time = luxonDate.toFormat('HH:mm');

	return { year, monthNumber, monthName, day, time };
}