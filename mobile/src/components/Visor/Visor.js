import React, { useState } from 'react';
import { VisorStyle, TextVisor } from './styles';

export function Visor({ visor }) {
  return (
    <VisorStyle>
      <TextVisor>{visor}</TextVisor>
    </VisorStyle>
  );
}
