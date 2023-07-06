import SectionItem from "./SectionItem";

function Section({ arr }) {
  return arr.map((item) => {
    return (
      <SectionItem
        key={item.name}
        name={item.name}
        surname={item.surname}
        days={item.days}
        salaryPerDay={item.salaryPerDay}
      />
    );
  });
}

export default Section;
