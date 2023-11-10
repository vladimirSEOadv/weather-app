import { makeConvertedDate } from "./makeConvertedDate.ts";

export const makeWeekForecastData = (data: any, currentLang: string) => {
  const dataAggregatedByDays = data.list.reduce((acc, current) => {
    const { yearMonthDay, year, monthNumber, monthName, dayNumber, dayOfWeek } =
      makeConvertedDate({
        unixDate: current.dt,
        currentLang,
        monthFormat: "MMMM",
        dayOfWeekFormat: "EEE",
      });

    if (acc.hasOwnProperty(yearMonthDay)) {
      acc[yearMonthDay!].temp.push(current.main.temp);
    } else {
      acc[yearMonthDay!] = {
        year,
        monthNumber,
        monthName,
        dayNumber,
        dayOfWeek,
        temp: [current.main.temp],
      };
    }

    return acc;
  }, {});

  const result = [];

  for (const day in dataAggregatedByDays) {
    const { temp, dayOfWeek, dayNumber } = dataAggregatedByDays[day];
    const sumOfTemp = temp.reduce((acc, current) => {
      return acc + current;
    }, 0); // Сумма всех замеров одного дня
    const averageTempForDay = Math.round(sumOfTemp / temp.length - 1); // Средняя температура за день
    result.push({
      label: `${dayNumber} ${dayOfWeek}`,
      info: averageTempForDay,
    });
  }
  return result;
};
