function SolicitationsList({ solicitacoes, onSelecionar }) {
  function formatarValor(valor) {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
    })
  }

  return (
    <div className="card">
      <table>
        <thead>
          <tr>
            <th>Solicitante</th>
            <th>Finalidade</th>
            <th>Valor</th>
            <th>Score</th>
            <th>Data</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {solicitacoes.map((s) => (
            <tr key={s.id} onClick={() => onSelecionar(s)} className="clicavel">
              <td className="nome">
                <span>{s.nome}</span>
                <small>{s.cpf}</small>
              </td>
              <td>{s.finalidade}</td>
              <td>{formatarValor(s.valor)}</td>
              <td>
                <span className={`score ${s.score >= 700 ? 'bom' : s.score >= 550 ? 'medio' : 'baixo'}`}>
                  {s.score}
                </span>
              </td>
              <td className="data">{s.data}</td>
              <td>
                <span className={`badge ${s.status.toLowerCase().replace(/ /g, '-')}`}>
                  {s.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SolicitationsList