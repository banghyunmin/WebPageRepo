import React from 'react';

const AppCard = ({ title, description, icon, onClick }) => {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '1rem',
        padding: '1rem',
        cursor: 'pointer',
        textAlign: 'center',
        transition: 'all 0.3s',
      }}
      onClick={onClick}
    >
      <img src={icon} alt={title} style={{ width: '80px', height: '80px' }} />
      <h3>{title}</h3>
      <p style={{ color: '#666' }}>{description}</p>
    </div>
  );
};

export default AppCard;