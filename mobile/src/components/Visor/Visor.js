import React, { useState } from 'react';
import { VisorStyle, TextVisor } from './Styles';

export function Visor({ visor }) {
  return (
    <VisorStyle>
      <TextVisor>{visor}</TextVisor>
    </VisorStyle>
  );
}
