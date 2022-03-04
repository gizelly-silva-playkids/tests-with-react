import React from 'react';
import { render, screen } from '@testing-library/react';

import Conta from './Conta';

describe('ContaComponent', () => {
   it('should be display balance with currency formatted', () => {
      render(<Conta saldo={3000}/>);

      const balance = screen.getByTestId('saldo-conta');

      expect(balance.textContent).toBe('R$ 3000');
   })
});