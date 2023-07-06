import Table from "react-bootstrap/Table";
import React from "react";

const SectionItem = ({ name, surname, days, salaryPerDay }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Days</th>
          <th>Salary</th>
          <th>Total Salary</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{name}</td>
          <td>{surname}</td>
          <td>{days}</td>
          <td>{salaryPerDay}</td>
          <td>{salaryPerDay * days}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default SectionItem;

// <div>
//   {name}
//   <br />
//   {surname}
//   <br />
//   {days}
//   <br />
//   {salaryPerDay}
// </div>
