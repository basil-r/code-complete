const vacationDays = {
  "software engineer": 14,
  accountant: 16,
};

function getDayDiff(employmentDate) {
  const today = new Date();
  const emplDate = new Date(employmentDate);

  const dayDiff = today - emplDate;
  const dayInMs = 86400000;

  return Math.floor(dayDiff / dayInMs);
}

function vacationDayBonus(workDays) {
  const yearDays = 365;

  if (workDays > yearDays * 2) return 6;
  if (workDays > yearDays * 1.5) return 4;
  if (workDays > yearDays) return 3;
  if (workDays > yearDays * 0.5) return 1;

  return 0;
}

export function determineVacationLength(employee) {
  const position = employee.position;
  const employmentDate = employee.employmentDate;

  const leaveDays = vacationDays[position.toLowerCase()];
  const workingDays = getDayDiff(employmentDate);
  const bonusDays = vacationDayBonus(workingDays);

  return leaveDays + bonusDays;
}
