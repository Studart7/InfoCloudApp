import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const features = [
  {
    to: '/tabela',
    title: 'Tabela',
    desc: 'Visualização estruturada de registros históricos e atuais.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M3 15h18" />
        <path d="M9 3v18" />
      </svg>
    ),
  },
  {
    to: '/formulario',
    title: 'Formulário',
    desc: 'Entrada de dados e parametrização de consultas.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4Z" />
      </svg>
    ),
  },
  {
    to: '/mapa',
    title: 'Mapa',
    desc: 'Geolocalização e pontos de monitoramento interativos.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
        <line x1="8" y1="2" x2="8" y2="18" />
        <line x1="16" y1="6" x2="16" y2="22" />
      </svg>
    ),
  },
  {
    to: '/grafico',
    title: 'Gráfico',
    desc: 'Análise de tendências com gráficos interativos.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    to: '/sobre-nos',
    title: 'Sobre Nós',
    desc: 'Conheça a equipe por trás do Projeto Nimbus.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const PaginaInicial = () => {
  return (
    <div className="home-dark">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-glow" />
        <div className="hero-content">
          <div className="hero-badge">
            <span className="ping-dot">
              <span className="ping-ring" />
              <span className="ping-core" />
            </span>
            Dados em tempo real
          </div>

          <h1 className="hero-title">
            Projeto <span className="gradient-text">Nimbus</span>
          </h1>

          <p className="hero-subtitle">
            Plataforma de dados meteorológicos — visualize, analise e exporte
            informações climáticas de forma intuitiva com processamento de alta
            fidelidade.
          </p>

          <div className="hero-actions">
            <Link to="/tabela" className="cta-button">
              Explorar Dados
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
            <a
              href="https://github.com/DaviJCB/InfoCloud/tree/main"
              className="cta-button-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentação
            </a>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="features-section">
        <div className="features-header">
          <h2>Nossas Funcionalidades</h2>
          <p>Ferramentas para análise climática profunda.</p>
        </div>

        <div className="features-grid">
          {features.map((f) => (
            <Link to={f.to} key={f.to} className="glass-card feature-card">
              <div className="feature-icon">{f.icon}</div>
              <div className="feature-info">
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <div className="footer-inner">
          <span className="footer-brand">☁️ Nimbus</span>
          <p>© 2024 Projeto Nimbus. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default PaginaInicial;