import { DateTime } from "luxon";

interface MakeConvertedDateProps {
  unixDate: number;
  currentLang: string;
  monthFormat: string;
  dayOfWeekFormat: string;
}

const upperCaseFirstLetter = (str: string) => {
  // По странным причинам luxon возвращает переведенные месяца в нижнем регистре
  return str
    .split("")
    .map((letter, index) => (index === 0 ? letter.toUpperCase() : letter))
    .join("");
};

export const makeConvertedDate = ({
  unixDate,
  currentLang,
  monthFormat,
  dayOfWeekFormat,
}: MakeConvertedDateProps) => {
  const luxonDate = DateTime.fromMillis(unixDate * 1000).setLocale(currentLang); //""uk", "en"
  const yearMonthDay = luxonDate.toISODate(); // 2023-11-10
  const year = luxonDate.year;
  const monthNumber = luxonDate.month;
  const monthName = upperCaseFirstLetter(luxonDate.toFormat(monthFormat));
  const dayNumber = luxonDate.day;
  const dayOfWeek = upperCaseFirstLetter(luxonDate.toFormat(dayOfWeekFormat));
  const time = luxonDate.toFormat("HH:mm");

  return {
    yearMonthDay,
    year,
    monthNumber,
    monthName,
    dayNumber,
    dayOfWeek,
    time,
  };
};
