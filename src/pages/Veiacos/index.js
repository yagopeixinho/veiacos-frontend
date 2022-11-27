export default function Veiacos() {
  return (
    <div className="veiacos-page">
      <table className="veiacos-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Data</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {[{ name: "Yago" }].map((veiaco, index) => (
            <tr key={index}>
              <td>
                <span className="veiaco-picture" />
                {veiaco.name}
              </td>
              <td>{veiaco.phone}</td>
              <td>{new Date(veiaco.created_at).toLocaleDateString("pt-BR")}</td>
              <td>
                <label>Status</label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
