import React, { useState } from 'react';

const EjemploReact = (props) => {
  const [contador, setContador] = useState(0);
  const { titulo, color, onIncrement } = props;

  const handleClick = () => {
    const nuevoValor = contador + 1;
    setContador(nuevoValor);
    onIncrement?.(nuevoValor);
  };

  return (
    <div style={{
      backgroundColor: '#f8f9fa',
      border: `2px solid ${color}`,
      borderRadius: '8px',
      padding: '20px',
      margin: '15px 0'
    }}>
      <h3 style={{ color: color, marginTop: 0 }}>{titulo}</h3>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Contador: {contador}</p>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: color,
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Incrementar desde React
      </button>
    </div>
  );
};

export default EjemploReact;