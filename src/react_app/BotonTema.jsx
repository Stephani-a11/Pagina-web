import React, { useState, useEffect } from 'react';

// Intentar importar tu librería
let stephani19;
try {
  stephani19 = require('stephani19');
  console.log('✅ Librería stephani19 cargada:', stephani19);
} catch (error) {
  console.error('❌ Error al cargar stephani19:', error);
}

const BotonTema = (props) => {
  const [temaActual, setTemaActual] = useState('claro');

  // Detectar el tema actual al cargar
  useEffect(() => {
    const esOscuro = document.body.classList.contains('tema-oscuro');
    setTemaActual(esOscuro ? 'oscuro' : 'claro');
  }, []);

  const cambiarTema = () => {
    try {
      // Aquí llamamos a tu librería
      if (stephani19) {
        console.log('🎨 Ejecutando stephani19');
        
        // Dependiendo de cómo exporte tu librería:
        if (typeof stephani19 === 'function') {
          // Si es una función directamente
          stephani19();
        } else if (stephani19.CambiarTema) {
          // Si tiene una propiedad CambiarTema
          stephani19.CambiarTema();
        } else if (stephani19.default) {
          // Si tiene export default
          stephani19.default();
        } else {
          // Si no sabemos cómo llamarla
          console.warn('No se cómo llamar a la librería', stephani19);
          // Fallback: cambiar clase manualmente
          document.body.classList.toggle('tema-oscuro');
        }
        
        // Actualizar estado
        const nuevoTema = document.body.classList.contains('tema-oscuro') ? 'oscuro' : 'claro';
        setTemaActual(nuevoTema);
        
        // Notificar a Vue
        if (props.onTemaCambiado) {
          props.onTemaCambiado(nuevoTema);
        }
      } else {
        console.warn('Librería no disponible, usando modo simulado');
        // Simular cambio de tema
        document.body.classList.toggle('tema-oscuro');
        const nuevoTema = document.body.classList.contains('tema-oscuro') ? 'oscuro' : 'claro';
        setTemaActual(nuevoTema);
        props.onTemaCambiado?.(nuevoTema);
      }
    } catch (error) {
      console.error('Error al cambiar tema:', error);
      alert('Error al cambiar tema: ' + error.message);
    }
  };

  return (
    <div style={{
      padding: '20px',
      border: `2px solid ${temaActual === 'oscuro' ? '#9b59b6' : '#3498db'}`,
      borderRadius: '8px',
      backgroundColor: temaActual === 'oscuro' ? '#2d2d2d' : '#f8f9fa',
      color: temaActual === 'oscuro' ? 'white' : 'black',
      transition: 'all 0.3s ease'
    }}>
      <h3 style={{ margin: '0 0 15px 0' }}>
        {temaActual === 'oscuro' ? '🌙' : '☀️'} Control de Tema
      </h3>
      
      <button
        onClick={cambiarTema}
        style={{
          backgroundColor: temaActual === 'oscuro' ? '#9b59b6' : '#3498db',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold',
          width: '100%',
          transition: 'all 0.3s'
        }}
        onMouseEnter={(e) => e.target.style.opacity = '0.8'}
        onMouseLeave={(e) => e.target.style.opacity = '1'}
      >
        {temaActual === 'oscuro' ? 'Cambiar a Claro' : 'Cambiar a Oscuro'}
      </button>
      
      <p style={{ 
        marginTop: '15px', 
        fontSize: '14px',
        textAlign: 'center',
        color: temaActual === 'oscuro' ? '#ccc' : '#666'
      }}>
        {stephani19 ? '✓ Usando librería real' : '⚠ Usando modo simulado'}
        <br />
        <strong>Tema: {temaActual}</strong>
      </p>
    </div>
  );
};

export default BotonTema;