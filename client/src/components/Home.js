// Dashboard.js
import React from 'react';
import Header from './Header';

const Home = () => {
  const cards = [
    {
      title: 'Analytics Dashboard',
      description: 'View detailed analytics and insights',
      icon: '📊'
    },
    {
      title: 'User Management',
      description: 'Manage user accounts and permissions',
      icon: '👥'
    },
    {
      title: 'Reports',
      description: 'Generate and view reports',
      icon: '📑'
    },
    {
      title: 'Settings',
      description: 'Configure system settings',
      icon: '⚙️'
    }
  ];

  return (
    <div className="dashboard-layout">
      {/* Left Sidebar */}
      <nav className="sidebar">
        <div className="sidebar-header">
          <svg className="logo-icon" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span>InsideBox</span>
        </div>
        
        <div className="nav-links">
          <a href="#company" className="nav-link active">
            <svg viewBox="0 0 24 24" className="nav-icon">
              <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
            </svg>
            <span>Company Info</span>
          </a>
          <a href="#dochub" className="nav-link">
            <svg viewBox="0 0 24 24" className="nav-icon">
              <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
            </svg>
            <span>Doc Hub</span>
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <Header />
        <div className="dashboard-content">
          <div className="cards-grid">
            {cards.map((card, index) => (
              <div key={index} className="card">
                <div className="card-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;