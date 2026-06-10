import { useState } from 'react'
import Sidebar from './components/Sidebar'
import SolicitationsList from './components/SolicitationsList'
import CreditFile from './components/CreditFile'
import { solicitacoes } from './mockdata'

const filtros = ['Todos', 'Em análise', 'Aprovado', 'Recusado', 'Pendente de documentos']

function App() {
  const [filtroAtivo, setFiltroAtivo] = useState('Todos')
  const [selecionado, setSelecionado] = useState(null)

  const solicitacoesFiltradas = filtroAtivo === 'Todos'
    ? solicitacoes
    : solicitacoes.filter(s => s.status === filtroAtivo)

  const totalSolicitado = solicitacoes.reduce((acc, s) => acc + s.valor, 0)
  const totalAprovado = solicitacoes.filter(s => s.status === 'Aprovado').reduce((acc, s) => acc + s.valor, 0)
  const emAnalise = solicitacoes.filter(s => s.status === 'Em análise').length
  const taxaAprovacao = Math.round((solicitacoes.filter(s => s.status === 'Aprovado').length / solicitacoes.length) * 100)

  function formatarValor(valor) {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
    })
  }

  return (
    <div className="app">
      <Sidebar />
      <main className="main">
        <div className="topbar">
          <h1>Solicitações de Crédito</h1>
          <span>Junho 2026</span>
        </div>

        <div className="kpi-row">
          <div className="kpi-card">
            <span className="kpi-label">Total solicitado</span>
            <span className="kpi-value">{formatarValor(totalSolicitado)}</span>
            <span className="kpi-trend neutro">{solicitacoes.length} solicitações</span>
          </div>
          <div className="kpi-card">
            <span className="kpi-label">Total aprovado</span>
            <span className="kpi-value verde">{formatarValor(totalAprovado)}</span>
            <span className="kpi-trend positivo">▲ taxa de {taxaAprovacao}%</span>
          </div>
          <div className="kpi-card">
            <span className="kpi-label">Em análise</span>
            <span className="kpi-value azul">{emAnalise}</span>
            <span className="kpi-trend neutro">aguardando decisão</span>
          </div>
          <div className="kpi-card">
            <span className="kpi-label">Score médio</span>
            <span className="kpi-value">{Math.round(solicitacoes.reduce((acc, s) => acc + s.score, 0) / solicitacoes.length)}</span>
            <span className="kpi-trend positivo">carteira saudável</span>
          </div>
        </div>

        <div className="filtros">
          {filtros.map(f => (
            <button
              key={f}
              className={filtroAtivo === f ? 'ativo' : ''}
              onClick={() => setFiltroAtivo(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <SolicitationsList
          solicitacoes={solicitacoesFiltradas}
          onSelecionar={setSelecionado}
        />

        {selecionado && (
          <CreditFile
            solicitacao={selecionado}
            onFechar={() => setSelecionado(null)}
          />
        )}
      </main>
    </div>
  )
}

export default App