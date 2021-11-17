const minYear = '1998';
const maxYear = '2021';

function yearsInBetween(
  startYear = new Date().getFullYear(),
  endYear = new Date().getFullYear() + 1
) {
  const yearArray = [];
  for (let i = startYear; i <= endYear; i++) {
    yearArray.push(i);
  }
  return yearArray;
}

console.log(yearsInBetween(parseInt(minYear), parseInt(maxYear)));
