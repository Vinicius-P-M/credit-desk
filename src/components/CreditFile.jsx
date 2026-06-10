function CreditFile({ solicitacao, onFechar }) {
  function formatarValor(valor) {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
    })
  }

  const scoreClasse = solicitacao.score >= 700
    ? 'bom'
    : solicitacao.score >= 550
    ? 'medio'
    : 'baixo'

  const recomendacao = solicitacao.score >= 700
    ? 'Perfil favorável para aprovação.'
    : solicitacao.score >= 550
    ? 'Análise manual recomendada.'
    : 'Risco elevado — recusar ou solicitar garantias.'

  return (
    <div className="ficha-overlay" onClick={onFechar}>
      <div className="ficha" onClick={e => e.stopPropagation()}>

        <div className="ficha-header">
          <div>
            <h2>{solicitacao.nome}</h2>
            <span className="ficha-cpf">{solicitacao.cpf}</span>
          </div>
          <button className="fechar" onClick={onFechar}>✕</button>
        </div>

        <div className="ficha-grid">
          <div className="ficha-item">
            <span className="ficha-label">Valor solicitado</span>
            <span className="ficha-value">{formatarValor(solicitacao.valor)}</span>
          </div>
          <div className="ficha-item">
            <span className="ficha-label">Finalidade</span>
            <span className="ficha-value">{solicitacao.finalidade}</span>
          </div>
          <div className="ficha-item">
            <span className="ficha-label">Prazo</span>
            <span className="ficha-value">{solicitacao.prazo} meses</span>
          </div>
          <div className="ficha-item">
            <span className="ficha-label">Renda mensal</span>
            <span className="ficha-value">{formatarValor(solicitacao.renda)}</span>
          </div>
          <div className="ficha-item">
            <span className="ficha-label">Data</span>
            <span className="ficha-value">{solicitacao.data}</span>
          </div>
          <div className="ficha-item">
            <span className="ficha-label">Status</span>
            <span className={`badge ${solicitacao.status.toLowerCase().replace(/ /g, '-')}`}>
              {solicitacao.status}
            </span>
          </div>
        </div>

        <div className="ficha-score">
          <span className="ficha-label">Score de crédito</span>
          <div className="score-row">
            <span className={`score grande ${scoreClasse}`}>{solicitacao.score}</span>
            <span className="recomendacao">{recomendacao}</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CreditFile