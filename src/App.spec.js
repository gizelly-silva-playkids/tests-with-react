import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App'

describe('AppComponent', () => {
   it('should be display bank name', () => {
      render(<App />);

      expect(screen.getByText('ByteBank')).toBeInTheDocument()
   })

   it('should be display balance', () => {
      render(<App />);

      expect(screen.getByText('Saldo:')).toBeInTheDocument()
   })

   it('should be display the \'realize operation\' button', () => {
      render(<App />);

      expect(screen.getByText('Realizar operação')).toBeInTheDocument()
   })
});