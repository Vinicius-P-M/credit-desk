const navItems = [
  { icon: '📋', label: 'Solicitações' },
  { icon: '📊', label: 'Painel' },
  { icon: '👥', label: 'Clientes' },
  { icon: '⚙️', label: 'Configurações' },
]

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <span className="dot"></span>
        Credit Desk
      </div>
      <nav>
        {navItems.map((item) => (
          <a key={item.label} className="nav-item">
            {item.icon} {item.label}
          </a>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar