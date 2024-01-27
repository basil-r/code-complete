function vacationDayBonus(workDays) {
  const yearDays = 365;

  if (workDays > yearDays * 2) return 6;
  if (workDays > yearDays * 1.5) return 4;
  if (workDays > yearDays) return 3;
  if (workDays > yearDays * 0.5) return 1;

  return 0;
}

export function determineVacationBonus(person) {
  const workingDays = person.getWorkingDays();
  const bonusDays = vacationDayBonus(workingDays);

  return bonusDays;
}
