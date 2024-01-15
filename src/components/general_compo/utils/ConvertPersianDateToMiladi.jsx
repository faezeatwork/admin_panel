import jMoment from "jalali-moment";

export const ConvertPersianDateToMiladi = (date) => {
  const persianDateWithoutSpace = date.replace(/\s/g, ""); //یعنی هیچ فاصله ای نباشه
  const persianDate = jMoment(persianDateWithoutSpace, "D/M/YYYY").format(
    "YYYY/MM/DD"
  );
  const miladiDate = jMoment(persianDate, "jYYYY/jMM/jDD").format("YYYY-MM-DD");
  return miladiDate;
};
