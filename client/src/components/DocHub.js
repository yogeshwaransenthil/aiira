import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Card from './Card';

const DocHub = () => {
  const cards = [
    {
      title: 'Annual Report Summary',
      description: 'View and analyze annual report summary',
      icon: '📊'
    },
    {
      title: 'Financial Statements',
      description: 'View and analyze financial statements',
      icon: '�'
    },
    {
      title: '10K/Q',
      description: 'Generate and view 10K/Q reports',
      icon: '📑'
    },
    {
      title: 'Quarterly Report',
      description: 'View and analyze quarterly report',
      icon: '⚙️'
    }
  ];

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="main-content">
        <Header />
        <div className="dashboard-content">
          <div className="cards-grid">
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                icon={card.icon}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DocHub;