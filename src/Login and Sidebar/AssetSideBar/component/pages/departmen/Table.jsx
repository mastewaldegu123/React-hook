const Table = ({ data }) => {
    return (
      <table>
        <tbody>
          <tr>
          
            <th>departmentID</th>
            <th>department_name</th>
            <th>department_role</th>
            <th>number_ofemployee</th>
          
          </tr>
          {data.map((item) => (
            <tr key={item.id}>
             
              <td>{item.departmentID}</td>
              <td>{item.department_name}</td>
              <td>{item.department_role}</td>
              <td>{item.number_ofemployee}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table;