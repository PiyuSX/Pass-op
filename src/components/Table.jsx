
const Table = ({ passwordArray }) => {
  return (
    <table class="table-auto">
      <thead>
        <tr>
          <th>Site URL</th>
          <th>Username</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        {passwordArray.map((item, index) => (
          <tr key={index}>
            <td>{item.siteUrl}</td>
            <td>{item.username}</td>
            <td>{item.password}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
