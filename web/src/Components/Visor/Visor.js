import React from 'react';
import './Visor.css';

export function Visor({ visor }) {
  return (
    <div className="visor">
      <span className="visor-number">{visor}</span>
    </div>
  );
}
