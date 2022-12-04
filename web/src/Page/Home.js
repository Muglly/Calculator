import React from 'react';

import { ButtonsNumber } from '../Components/ButtonsNumber/ButtonsNumber';
import { Visor } from '../Components/Visor/Visor';

export function Home() {
  return (
    <div>
      <Visor />
      <ButtonsNumber />
    </div>
  );
}
