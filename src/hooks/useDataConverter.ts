// import { useContext } from "react";
// import { LangContext } from "../contex/LangContextWrapper/LangContextWrapper.tsx";
// import { makeConvertedDate } from "../utils/makeConvertedDate.ts";
//
// interface useDataConverterProps {
//   unixDate: number;
//   monthFormat: string;
//   dayOfWeekFormat: string;
// }
//
// export const useDataConverter = ({
//   unixDate,
//   monthFormat,
//   dayOfWeekFormat,
// }) => {
//   const { currentLang } = useContext(LangContext);
//
//   const { dayNumber, dayOfWeek, monthName, year } = makeConvertedDate({
//     unixDate,
//     currentLang,
//     monthFormat,
//     dayOfWeekFormat,
//   });
//
//   return { dayNumber, monthName, year, dayString };
// };
