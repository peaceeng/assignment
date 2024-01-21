export const DaysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const MonthsOfYear = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export const PreDefinedRanges = [
  "Today",
  "Yesterday",
  "This week",
  "Last 7 days",
  "Last 30 days",
  "This month",
  "Last month",
  "This year",
  "Last year",
];
export const dateCompare = (date1, date2) => {
  const newDate1 = new Date(
    date1.getFullYear(),
    date1.getMonth(),
    date1.getDate()
  );
  const newDate2 = new Date(
    date2.getFullYear(),
    date2.getMonth(),
    date2.getDate()
  );
  return newDate1 < newDate2;
};

export const getPredefined = (index) => {
  const currentDate = new Date();
  switch (index) {
    case 0: // Today
      return [
        new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate()
        ),
        new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate()
        ),
      ];
    case 1: // Yesterady
      return [
        new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate() - 1
        ),
        new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate() - 1
        ),
      ];
    case 2: // This week
      return [
        new Date(
          currentDate.setDate(currentDate.getDate() - currentDate.getDay())
        ),
        new Date(
          currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 6)
        ),
      ];
    case 3: // Last 7 days
      return [
        new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate() - 7
        ),
        new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate()
        ),
      ];
    case 4: // Last 30 days
      return [
        new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate() - 30
        ),
        new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate()
        ),
      ];
    case 5: // This month
      return [
        new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
        new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate()
        ),
      ];
    case 6: // Last month
      return [
        new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
        new Date(currentDate.getFullYear(), currentDate.getMonth(), 0),
      ];
    case 7: // This year
      return [
        new Date(currentDate.getFullYear(), 0, 1),
        new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate()
        ),
      ];
    case 8: // Last year
      return [
        new Date(currentDate.getFullYear() - 1, 0, 1),
        new Date(currentDate.getFullYear() - 1, 11, 31),
      ];
    default:
      return [];
  }
};
