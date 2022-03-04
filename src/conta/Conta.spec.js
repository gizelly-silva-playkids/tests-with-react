import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Conta from './Conta';

describe('ContaComponent', () => {
   it('should be display balance with currency formatted', () => {
      render(<Conta saldo={3000}/>);

      const balance = screen.getByTestId('saldo-conta');

      expect(balance.textContent).toBe('R$ 3000');
   });

   it('should be called function realize transaction when button is clicked', () => {
      const RealizeTransactionFunction = jest.fn(); 
      
      render(<Conta saldo={3000} realizarTransacao={RealizeTransactionFunction}/>);

      fireEvent.click(screen.getByText('Realizar operação'))

      expect(RealizeTransactionFunction).toHaveBeenCalled();
   });
});