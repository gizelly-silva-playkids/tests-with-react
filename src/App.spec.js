import React from 'react';
import { render, screen } from '@testing-library/react';

import App, { calcularNovoSaldo } from './App'

describe('AppComponent - Displaying info from bank', () => {
   
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

describe('AppComponent - Carrying out bank transactions', () => {

   it('should be increase balance when occur a deposit', () => {
      const values = {
         transacao: 'deposito',
         valor: 300
      }
      const newBalance = calcularNovoSaldo(values, 1000)
      expect(newBalance).toBe(1300);
   });

   it('should be decrease balance when occur a withdrawal', () => {
      const values = {
         transacao: 'saque',
         valor: 300
      }
      const newBalance = calcularNovoSaldo(values, 1000)
      expect(newBalance).toBe(700);
   });

});