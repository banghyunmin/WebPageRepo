import React from 'react';
import AppCard from '../components/AppCard';
import logo from '../logo.svg';

const HomePage = () => {
  const apps = [
    {
      title: 'n8n Workflow',
      description: 'n8n 자동화 워크플로우',
      icon: logo,
      url: 'https://www.hmbang.xyz',
    },
    {
      title: 'Jupyter Notebook',
      description: 'Python Web IDE',
      icon: logo,
      url: 'http://www.hmbang.xyz:8889',
    },
    {
      title: 'MongoDB Viewer',
      description: 'MongoDB Data CRUD WebApp',
      icon: logo,
      url: '110.13.220.197:3000/mongo-viewer',
    },
    {
      title: 'TestHoemPage',
      description: 'My Test Homepage',
      icon: logo,
      url: '/homePage',
    },
    {
      title: 'TestProductsPage',
      description: 'My Test Products Page',
      icon: logo,
      url: '/products',
    },
  ];

  const openApp = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center' }}>📦 앱 런처</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1.5rem',
        marginTop: '2rem'
      }}>
        {apps.map((app, i) => (
          <AppCard
            key={i}
            title={app.title}
            description={app.description}
            icon={app.icon}
            onClick={() => openApp(app.url)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;