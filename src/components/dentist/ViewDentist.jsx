export const ViewDentist = ({ data }) => {
  return (
    <>
      {data.map((dent) => (
        <table key={dent.id}>
          <thead>
            <tr>
              <th>Id</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Registration nunber</th>
              <th>Shift</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{dent.id}</td>
              <td>{dent.firstName}</td>
              <td>{dent.lastName}</td>
              <td>{dent.registrationNumber}</td>
              <td>{dent.shift ? dent.shift : "Don´t have"}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </>
  );
};
